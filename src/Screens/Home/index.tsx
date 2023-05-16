import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {useRecoilValue} from 'recoil';
import {useTailwind} from 'tailwind-rn';
import {bannerData} from '../../recoil/selectors';
import {getImage} from '../../utils';
import Icon from 'react-native-vector-icons/MaterialIcons';

const data = [
  {
    id: '123',
    label: '1232',
  },
  {
    id: '2222',
    label: '1232',
  },
  {
    id: '333',
    label: '1232',
  },
  {
    id: '444',
    label: '1232',
  },
  {
    id: '555',
    label: '1232',
  },
  {
    id: '666',
    label: '1232',
  },
  {
    id: '777',
    label: '1232',
  },
  {
    id: '128883',
    label: '1232',
  },
];

const Home = prop => {
  const tw = useTailwind();

  const {navigation} = prop;
  // const data = useRecoilValue(bannerData);

  // const renderitem = ({item}) => {
  //   return (
  //     <TouchableOpacity style={tw('rounded-sm w-[300px] bg-white')}>
  //       <Image
  //         source={{
  //           uri: getImage(item.mainImage.asset._ref),
  //         }}
  //         style={tw('w-full h-[120px]')}
  //         resizeMode="cover"
  //       />
  //       <Text style={tw('font-karla mb-1 text-sm font-bold')}>
  //         {item.heading}
  //       </Text>
  //     </TouchableOpacity>
  //   );
  // };

  const renderitem = ({item}) => {
    return (
      <View
        key={item.id}
        style={tw(
          'h-[150px] rounded-lg w-[120px] bg-[#6fb3ce] mr-2 items-center justify-center',
        )}>
        <View
          style={tw(
            'absolute left-2 top-2 rounded-full p-2 bg-white border border-[#0630d8]',
          )}>
          <Icon name="face" size={20} />
        </View>
        <Text>{item.label}</Text>
      </View>
    );
  };

  // if (!data?.length) {
  //   return <ActivityIndicator size={'large'} color={'red'} />;
  // }

  return (
    <View style={tw('flex-1 bg-white')}>
      <View style={tw('p-4 px-3')}>
        <Text style={tw('font-karla text-[16px] mb-2')}>Stories</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
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
