import {View, Text, SafeAreaView, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth, storage} from '../../firebase';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import {useTailwind} from 'tailwind-rn/dist';
import {v4} from 'uuid';
import {launchImageLibrary} from 'react-native-image-picker';

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
    const uploadUri = image?.uri;

    console.log('uploadUri', uploadUri);

    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

    // Add timestamp to File Name
    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;

    setUploading(true);
    setTransferred(0);

    console.log('filename', filename);

    const imageRef = ref(storage, `jsync_profiles/${filename}`);
    uploadBytes(imageRef, image).then(snapshot => {
      getDownloadURL(snapshot.ref).then(url => {
        console.log('urlss', url);
      });
    });
  };

  const pickImage = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        includeBase64: true,
        quality: 0.3,
      });

      if (result.assets) {
        const source = {uri: result.assets[0].uri};

        // console.log('result.assets', result.assets);
        setImage(source);
      }
    } catch (error) {}
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
          onPress={() => {
            pickImage();
          }}
        />
        <Button
          title="upload"
          onPress={async () => {
            uploadImage();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
