import {View, Text, Image, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useTailwind} from 'tailwind-rn';

const Splash = props => {
  const tw = useTailwind();

  const [userInfo, setUserInfo] = useState<any>();

  const {navigation} = props;

  // const data = useRecoilValue(bannerData);

  // console.log('databanner', data);

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
        <Button
          title="button"
          onPress={() => {
            navigation?.navigate('home');
          }}
        />
      </View>
    </View>
  );
};

export default Splash;
