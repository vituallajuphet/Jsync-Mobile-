import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import FIcon from 'react-native-vector-icons/Feather';

import {Notification, Profile, Home, Posts} from '../';
import {useTailwind} from 'tailwind-rn/dist';
import {TouchableOpacity} from 'react-native';

const Tab = createBottomTabNavigator();

const AuthScreens = () => {
  const tw = useTailwind();

  return (
    <SafeAreaView style={tw('flex-1 bg-white')}>
      <View
        style={tw(
          'h-16 bg-[#fff] items-center border-b border-gray-200  flex-row justify-between px-4',
        )}>
        <View style={tw('flex-row items-center')}>
          {/* <Image
            source={require('../../assets/images/logo.png')}
            resizeMode="contain"
            style={tw('w-[40px] h-[40px] mr-2')}
          /> */}
          <Text style={tw('font-millenia text-xl')}>JsyncHub</Text>
        </View>
        <View style={tw('flex-row items-center justify-end')}>
          <TouchableOpacity
            style={tw(
              'bg-[#f3f0f0] rounded-full items-center justify-center p-2',
            )}>
            <FIcon name="search" size={21} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              tw('ml-4'),
              tw('bg-[#f3f0f0] rounded-full items-center justify-center p-2'),
            ]}>
            <FIcon name="message-circle" size={21} />
          </TouchableOpacity>
        </View>
      </View>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
          name="home"
          component={Home}
        />
        <Tab.Screen
          name="profile"
          component={Profile}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="user" color={color} size={size} />
            ),
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Post"
          component={Posts}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="camera" color={color} size={size} />
            ),
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="notification"
          component={Notification}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="bell" color={color} size={size} />
            ),
            tabBarShowLabel: false,
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default AuthScreens;
