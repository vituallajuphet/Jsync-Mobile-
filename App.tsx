import React from 'react';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import RootNavigator from './src/RootNavigator/RootNavigator';

const App = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <RootNavigator />
    </TailwindProvider>
  );
};

export default App;
