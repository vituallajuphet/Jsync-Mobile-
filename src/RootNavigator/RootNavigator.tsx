import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Boarding, Home, Splash} from '../Screens';
import {ActivityIndicator} from 'react-native';
import {getData, removeData} from '../utils/localStorage';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  // removeData('hasLaunched');

  const [state, setState] = React.useState('loading');

  getData('hasLaunched').then((res: any) => {
    setState(res !== null ? res : 'boarding');
  });

  if (state === 'loading') {
    return <ActivityIndicator size={'large'} color={'red'} />;
  }

  console.log('state', state);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={state}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="boarding" component={Boarding} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
