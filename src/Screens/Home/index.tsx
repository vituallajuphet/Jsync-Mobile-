import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useRecoilValue} from 'recoil';
import {useTailwind} from 'tailwind-rn';
import {bannerData} from '../../recoil/selectors';
import {getImage} from '../../utils';

const Home = prop => {
  const tw = useTailwind();

  const {navigation} = prop;
  const data = useRecoilValue(bannerData);

  const renderitem = ({item}) => {
    console.log('item', item);
    return (
      <TouchableOpacity style={tw('rounded-sm w-[300px] p-2 py-4 bg-white')}>
        <Image
          source={{
            uri: getImage(item.mainImage.asset._ref),
          }}
          style={tw('w-full h-[120px]')}
          resizeMode="cover"
        />
        <Text style={tw('font-karla mb-1 text-sm font-bold')}>
          {item.heading}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={tw('flex-1')}>
      <View style={tw('py-4')}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item._id}
          scrollEnabled
          horizontal
          data={data}
          renderItem={renderitem}
        />
      </View>
    </View>
  );
};

export default Home;
