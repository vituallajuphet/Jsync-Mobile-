import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn/dist';

const Profile = () => {
  const tw = useTailwind();

  return (
    <View>
      <View
        style={tw(
          'h-[180px] overflow-hidden bg-[#578f9f] items-center justify-center ',
        )}>
        <View
          style={tw(
            'w-32 h-32 rounded-full overflow-hidden items-center z-20 top-6',
          )}>
          <Image
            style={tw('w-full h-full')}
            resizeMode="cover"
            source={require('../../assets/images/profile.jpg')}
          />
        </View>
        <View style={[styles.parent, tw('absolute top-[70%]')]}>
          <View style={styles.child}></View>
        </View>
      </View>
      <View style={tw('mt-4')}>
        <View style={tw('justify-center items-center')}>
          <Text style={tw('text-xl font-karla text-[#222]')}>
            Jheric Piscos
          </Text>
          <Text style={tw('text-xs font-karla text-[#787777]')}>
            Graphic Artist and Dancerous
          </Text>
        </View>
      </View>
      <View style={tw('flex-row items-center justify-center mt-6')}>
        <TouchableOpacity
          style={tw(
            'bg-[#087a99] border-[#087a99] border p-2 rounded-full px-4 mr-4 min-w-[120px] items-center justify-center',
          )}>
          <Text style={tw('text-white')}>Follow</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw(
            'border-[#087a99] border p-2 rounded-full px-3 min-w-[120px] items-center justify-center',
          )}>
          <Text style={tw('text-[#087a99]')}>Message</Text>
        </TouchableOpacity>
      </View>
      <View style={tw('flex-row justify-between px-10 mt-10')}>
        <View style={tw('items-center flex-[2]')}>
          <Text style={tw('font-karla text-[#222]')}>512</Text>
          <Text style={tw('font-karla text-[#505050] text-xs')}>Photos</Text>
        </View>
        <View
          style={tw('items-center border-l border-r border-gray-400 flex-[2]')}>
          <Text style={tw('font-karla text-[#222]')}>452</Text>
          <Text style={tw('font-karla text-[#505050] text-xs')}>Followers</Text>
        </View>
        <View style={tw('items-center flex-[2]')}>
          <Text style={tw('font-karla text-[#222]')}>33</Text>
          <Text style={tw('font-karla text-[#505050] text-xs')}>Following</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    height: 200,
    width: '100%',
    transform: [{scaleX: 2}],
    borderTopStartRadius: 800,
    borderTopEndRadius: 800,
    overflow: 'hidden',
  },
  child: {
    flex: 1,
    transform: [{scaleX: 0.5}],
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Profile;
