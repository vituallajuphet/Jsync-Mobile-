import {View, Text, Image} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

const OnBoarding = ({navigation}) => {
  return (
    <Onboarding
      onDone={() => {
        navigation.navigate('home');
      }}
      pages={[
        {
          backgroundColor: '#addcf5',
          image: <Image source={require('../../assets/images/logo.png')} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#addcf5',
          image: <Image source={require('../../assets/images/logo.png')} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#addcf5',
          image: <Image source={require('../../assets/images/logo.png')} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
};

export default OnBoarding;
