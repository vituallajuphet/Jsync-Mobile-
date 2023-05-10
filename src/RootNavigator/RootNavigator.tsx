import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Splash} from '../Screens';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="splash">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="splash" component={Splash} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
