import {View, Text} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn';

const Home = () => {
  const tw = useTailwind();

  return (
    <View style={tw('bg-red-200 flex-1 ')}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
