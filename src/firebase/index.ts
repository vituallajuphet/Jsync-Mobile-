// Import the functions you need from the SDKs you need

import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore, initializeFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyD2-E8WfwF66sNKqQh_vvoyfQuoO85FkGo',
  authDomain: 'jsync-1ff61.firebaseapp.com',
  projectId: 'jsync-1ff61',
  storageBucket: 'jsync-1ff61.appspot.com',
  messagingSenderId: '414982914077',
  appId: '1:414982914077:web:fa508184b011a4856e86f4',
  measurementId: 'G-6VED9K1TH2',
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export const storage = getStorage(app);
