import {View, Text} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn';

const Home = () => {
  const tw = useTailwind();

  return (
    <View style={tw('bg-[#55c8eb] flex-1 items-center justify-center')}>
      <Text
        style={{
          fontFamily: 'karla',
          fontSize: 20,
        }}>
        Home this is a some yaywa
      </Text>
    </View>
  );
};

export default Home;
