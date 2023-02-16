import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAQUyYAMyk8SmkvbWrOmQT42F99FQDjM5c',
  authDomain: 'hotelcrmsystem.firebaseapp.com',
  projectId: 'hotelcrmsystem',
  storageBucket: 'hotelcrmsystem.appspot.com',
  messagingSenderId: '812288423052',
  appId: '1:812288423052:web:ddbc891306c6c2d420b7a9',
  databaseURL: 'https://hotelcrmsystem-default-rtdb.firebaseio.com/',
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

export const storage = getStorage(app);
