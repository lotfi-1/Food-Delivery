// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAFi3bSqY_3GBoF_SXkPWbKsCmAgAlp-us',
  authDomain: 'test-auth-89861.firebaseapp.com',
  projectId: 'test-auth-89861',
  storageBucket: 'test-auth-89861.appspot.com',
  messagingSenderId: '1095657557128',
  appId: '1:1095657557128:web:2154798d2c607a6cbbe33d',
  measurementId: 'G-43P198XWJJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
