import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth, storage} from '../../firebase';
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
  uploadString,
} from 'firebase/storage';
import {useTailwind} from 'tailwind-rn/dist';
import ImageCropPicker from 'react-native-image-crop-picker';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const tw = useTailwind();

  const handleLogin = () => {
    if (!email || !pass) {
      return;
    }
    signInWithEmailAndPassword(auth, email, pass)
      .then((res: any) => {
        console.log('res', res);
      })
      .catch(e => {
        console.log('errs', e);
      });
  };

  const [image, setImage] = useState<any>(null);
  const [uploading, setUploading] = useState<any>(false);
  const [transferred, setTransferred] = useState<any>(false);

  // const imagesListRef = ref(storage, 'images/');
  // const uploadFile = () => {
  //   if (imageUpload == null) return;
  //   const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
  //   uploadBytes(imageRef, imageUpload).then(snapshot => {
  //     getDownloadURL(snapshot.ref).then(url => {
  //       setImageUrls(prev => [...prev, url]);
  //     });
  //   });
  // };

  const uploadImage = async () => {
    if (image == null) {
      return null;
    }
    const uploadUri = image;

    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

    // Add timestamp to File Name
    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;

    setUploading(true);
    setTransferred(0);

    console.log('filename', filename);
    const metadata = {
      contentType: 'image/jpeg',
    };

    const imageRef = ref(storage, `jsync_profiles/${filename}`);

    const uploadTask = uploadBytesResumable(imageRef, uploadUri, metadata);

    uploadTask.on(
      'state_changed',
      snapshot => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      error => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;

          // ...

          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
          console.log('File available at', downloadURL);
        });
      },
    );
  };

  const pickImage = async () => {
    ImageCropPicker.openPicker({
      width: 1200,
      height: 780,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
        setImage(imageUri);
      })
      .catch(err => {
        console.log('errr', err);
      });
  };

  return (
    <SafeAreaView>
      <View style={tw('p-4')}>
        <View style={tw('mb-10 items-center justify-center')}>
          <Text style={tw('text-xl font-karla')}>Login</Text>
        </View>
        <TextInput
          style={tw('w-full p-2 mb-2 border-b border-gray-400 mb-6')}
          onChangeText={(text: string) => setEmail(text)}
          placeholder="username"
        />
        <TextInput
          style={tw('w-full p-2 mb-2 border-b border-gray-400')}
          onChangeText={(text: string) => setPass(text)}
          placeholder="password"
          secureTextEntry={true}
        />
        <Button
          title="Login"
          onPress={() => {
            handleLogin();
          }}
        />
        <Button
          title="Pick"
          onPress={async () => {
            await pickImage();
          }}
        />
        <Button
          title="upload"
          onPress={async () => {
            await uploadImage();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
