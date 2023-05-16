import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Notification, Profile, Home, Posts} from '../';

const Tab = createBottomTabNavigator();

const AuthScreens = () => {
  return (
    <Tab.Navigator>
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
  );
};

export default AuthScreens;
