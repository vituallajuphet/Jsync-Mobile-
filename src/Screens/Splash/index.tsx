import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useTailwind} from 'tailwind-rn';
import {getAllHomeData} from '../../api';
import axios from 'axios';

const Splash = props => {
  const tw = useTailwind();

  const fetch = async () => {
    const res = await getAllHomeData();

    console.log('@data', res);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <View style={tw('bg-[#8be2f6] flex-1 items-center justify-center')}>
      <Text style={tw('font-karla text-[28px] text-white mb-4')}>
        JSYNC MOBILE
      </Text>
      <View>
        <Image
          source={require('../../assets/images/logo.png')}
          style={tw('w-[70px] h-[70px]')}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default Splash;
