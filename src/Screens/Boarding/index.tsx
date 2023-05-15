import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {useTailwind} from 'tailwind-rn/dist';
import {storeData} from '../../utils/localStorage';

const OnBoarding = ({navigation}) => {
  const tw = useTailwind();

  return (
    <Onboarding
      onDone={() => {
        navigation.navigate('home');
      }}
      showDone={false}
      pages={[
        {
          backgroundColor: '#addcf5',
          image: <Image source={require('../../assets/images/logo.png')} />,
          title: <Text style={tw('font-karla text-[30px]')}>JsyncHub</Text>,
          subtitle: (
            <View style={tw('mt-4 items-center flex-row justify-center')}>
              <Text style={tw('text-[17px] font-karla text-center')}>
                Welcome to our official mobile social media application
              </Text>
            </View>
          ),
        },
        {
          backgroundColor: '#addcf5',
          image: <Image source={require('../../assets/images/logo.png')} />,
          title: (
            <Text style={tw('font-karla text-[30px]')}>Social Platforms</Text>
          ),
          subtitle: (
            <View style={tw('mt-4 items-center flex-row justify-center')}>
              <Text style={tw('text-[17px] font-karla text-center')}>
                Stay tune and like our social media pages
              </Text>
            </View>
          ),
        },
        {
          backgroundColor: '#addcf5',
          image: <Image source={require('../../assets/images/logo.png')} />,
          title: "Let's Get Started",
          titleStyles: tw('text-gray-600'),
          subtitle: (
            <View style={tw('mt-4 items-center flex-row justify-center px-8')}>
              <TouchableOpacity
                onPress={() => {
                  storeData('hasLaunched', 'yes');
                  navigation.navigate('home');
                }}
                style={tw(
                  'bg-[#0d85c6] rounded-lg p-4  w-full items-center justify-center',
                )}>
                <Text style={tw('font-bold text-[18px] font-karla text-white')}>
                  START
                </Text>
              </TouchableOpacity>
            </View>
          ),
        },
      ]}
    />
  );
};

export default OnBoarding;
