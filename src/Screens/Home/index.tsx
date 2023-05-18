import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {useRecoilValue} from 'recoil';
import {useTailwind} from 'tailwind-rn';
import {bannerData} from '../../recoil/selectors';
import {getImage} from '../../utils';
import Icon from 'react-native-vector-icons/MaterialIcons';
import EIcon from 'react-native-vector-icons/Entypo';
import FIcon from 'react-native-vector-icons/FontAwesome';
import IIcon from 'react-native-vector-icons/Ionicons';

const data = [
  {
    id: '123',
    label: 'Jheric Piscos',
    url: require('../../assets/images/stories/story1.jpg'),
  },
  {
    id: '2222',
    label: 'Dwight Recamadas',
    url: require('../../assets/images/stories/story2.jpg'),
  },
  {
    id: '333',
    label: 'Juphet Vitualla',
    url: require('../../assets/images/stories/story3.jpg'),
  },
  {
    id: '444',
    label: 'Juphet Vitualla',
    url: require('../../assets/images/stories/story4.jpg'),
  },
  {
    id: '555',
    label: 'Juphet Vitualla',
    url: require('../../assets/images/stories/story5.jpg'),
  },
  {
    id: '666',
    label: 'Syriel Bergado',
    url: require('../../assets/images/stories/story5.jpg'),
  },
  {
    id: '777',
    label: '1232',
    url: require('../../assets/images/stories/story5.jpg'),
  },
  {
    id: '128883',
    label: '1232',
    url: require('../../assets/images/stories/story5.jpg'),
  },
];

const postData = [
  {
    id: '1',
    url: require('../../assets/images/post1.jpg'),
  },
  {
    id: '2',
    url: require('../../assets/images/post2.jpg'),
  },
  {
    id: '3',
    url: require('../../assets/images/post3.jpg'),
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

  const renderitem = ({item, index}) => {
    return (
      <View
        key={item.id}
        style={tw(
          'h-[150px] rounded-lg w-[120px] bg-[#76ceca] mr-2 items-center justify-center overflow-hidden',
        )}>
        <ImageBackground
          source={item.url}
          resizeMode="cover"
          style={tw('w-full h-full absolute')}
        />
        <View
          style={tw(
            'absolute left-2 top-2 rounded-full w-[34px] h-[34px] overflow-hidden bg-white border border-[#1371e3]',
          )}>
          <Image
            source={
              index % 2 !== 0
                ? require('../../assets/images/profile2.jpg')
                : require('../../assets/images/profile.jpg')
            }
            resizeMode="cover"
            style={tw('w-full h-full absolute')}
          />
        </View>
        <View
          style={tw('absolute bottom-2 px-1 text-left justify-start w-full ')}>
          <Text style={tw('text-white text-[10px] font-bold font-karla')}>
            {item.label}
          </Text>
        </View>
      </View>
    );
  };

  // if (!data?.length) {
  //   return <ActivityIndicator size={'large'} color={'red'} />;
  // }

  return (
    <ScrollView style={tw('flex-1 bg-white')}>
      <View style={tw('p-4 px-3')}>
        <Text style={tw('font-karla text-[16px] mb-2 text-[#222]')}>
          Stories
        </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          scrollEnabled
          horizontal
          data={data}
          renderItem={renderitem}
        />
      </View>
      <View style={tw('p-2')}>
        <FlatList
          scrollEnabled={false}
          data={postData}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View
                style={tw(
                  'bg-white border border-gray-200 py-3 rounded-xl mb-3',
                )}>
                <View style={tw('flex-row items-center justify-between px-4')}>
                  <View style={tw('flex-row items-center')}>
                    <View
                      style={tw(
                        'rounded-full w-[34px] h-[34px] overflow-hidden bg-white border border-[#1371e3]',
                      )}>
                      <Image
                        source={
                          index % 2 !== 0
                            ? require('../../assets/images/profile2.jpg')
                            : require('../../assets/images/profile3.jpg')
                        }
                        resizeMode="cover"
                        style={tw('w-full h-full absolute')}
                      />
                    </View>
                    <View style={tw('ml-2')}>
                      <Text
                        style={tw(
                          'font-bold text-[12px] font-karla text-[#222]',
                        )}>
                        Juphet Vitualla
                      </Text>
                      <Text style={tw('text-xs text-[10px] font-karla')}>
                        10 Mins Ago
                      </Text>
                    </View>
                  </View>
                  <View>
                    <TouchableOpacity
                      style={[
                        tw('ml-4'),
                        tw(
                          'bg-[#f3f0f0] rounded-full items-center justify-center p-2',
                        ),
                      ]}>
                      <EIcon
                        name="dots-three-horizontal"
                        size={18}
                        color={'#222'}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={tw('px-2')}>
                  <View style={tw('rounded-t-xl overflow-hidden mt-2')}>
                    <Image
                      source={item.url}
                      resizeMode="cover"
                      style={tw('w-full h-[200px]')}
                    />
                  </View>
                </View>
                <View style={tw('py-2 mt-2 flex-row items-center')}>
                  <TouchableOpacity style={[tw('ml-4')]}>
                    <EIcon name="heart-outlined" size={27} color={'#222'} />
                  </TouchableOpacity>
                  <TouchableOpacity style={[tw('ml-4 top-[-2px]')]}>
                    <FIcon name="comment-o" size={22} color={'#222'} />
                  </TouchableOpacity>
                  <TouchableOpacity style={[tw('ml-4')]}>
                    <FIcon name="send-o" size={20} color={'#222'} />
                  </TouchableOpacity>
                </View>
                <View style={tw('px-4 flex-row items-center')}>
                  <View style={tw('flex-row items-center')}>
                    <Text
                      style={tw(
                        'text-[10px] font-karla font-bold text-[#222]',
                      )}>
                      299
                    </Text>
                    <Text style={tw('text-[10px] font-karla ml-1')}>Likes</Text>
                  </View>
                  <View style={tw('flex-row items-center ml-4')}>
                    <Text
                      style={tw(
                        'text-[10px] font-karla font-bold text-[#222]',
                      )}>
                      120
                    </Text>
                    <Text style={tw('text-[10px] font-karla ml-1')}>
                      Comments
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
