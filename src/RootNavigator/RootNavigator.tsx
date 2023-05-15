import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Boarding, Home, Splash} from '../Screens';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const [isFirstLaunched, setFirstLaunched] = React.useState(false);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('isLaunched');
      if (value !== null) {
        // value previously stored
        console.log('not');
      }
    } catch (e) {
      // error reading value
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="boarding">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="boarding" component={Boarding} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
