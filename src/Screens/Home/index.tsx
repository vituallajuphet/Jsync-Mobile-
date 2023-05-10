import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {useRecoilValue} from 'recoil';
import {useTailwind} from 'tailwind-rn';
import {bannerData} from '../../recoil/selectors';
import {getImage} from '../../utils';

const Home = () => {
  const tw = useTailwind();
  const data = useRecoilValue(bannerData);

  return (
    <View style={tw('flex-1 p-4')}>
      <ScrollView contentContainerStyle={tw('w-full h-full bg-red-200')}>
        <View style={tw('flex-1')}>
          {data?.map(d => {
            return (
              <View style={tw('p-4 bg-white rounded-sm mb-4')}>
                <Text>{d.heading}</Text>
                <Image
                  source={{
                    uri: getImage(d.mainImage.asset._ref),
                  }}
                  style={tw('w-full h-[100px]')}
                  resizeMode="cover"
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
