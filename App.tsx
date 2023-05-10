import React from 'react';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import RootNavigator from './src/RootNavigator/RootNavigator';
import {RecoilRoot} from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <TailwindProvider utilities={utilities}>
        <RootNavigator />
      </TailwindProvider>
    </RecoilRoot>
  );
};

export default App;
