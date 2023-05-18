import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
// import {auth, storage} from '../../firebase';
import storage from '@react-native-firebase/storage';
import {utils} from '@react-native-firebase/app';
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
  uploadString,
} from 'firebase/storage';
import {useTailwind} from 'tailwind-rn/dist';
import ImageCropPicker from 'react-native-image-crop-picker';
import auth from '@react-native-firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const tw = useTailwind();

  const handleLogin = () => {
    if (!email || !pass) {
      return;
    }
    auth()
      .signInWithEmailAndPassword(email, pass)
      .then((res: any) => {
        console.log('res', res);
      })
      .catch(e => {
        console.log('errs', e);
      });
  };

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

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

    const reference = storage().ref('/jsync_profiles/' + filename);

    await reference.putFile(uploadUri).then(res => {
      console.log('uploaded');
    });

    const url = await reference.getDownloadURL();
    console.log('url', url);
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
