import {atom} from 'recoil';

export const appstate = atom({
  key: 'appState', // unique ID (with respect to other atoms/selectors)
  default: 'done', // default value (aka initial value)
});

export const homeData = atom({
  key: 'homeData', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
