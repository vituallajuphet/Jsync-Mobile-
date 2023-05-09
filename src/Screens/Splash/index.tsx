import {View, Text} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn';

const Splash = () => {
  const tw = useTailwind();

  return (
    <View style={tw('bg-[#55c8eb] flex-1 items-center justify-center')}>
      <Text style={tw('font-karla text-[20px]')}>test warning boang</Text>
    </View>
  );
};

export default Splash;
