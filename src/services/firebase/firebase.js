// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpW_OXwLwYVU2v9BfZCQoFFATZzlXyP0Y",
  authDomain: "pacific-booking-424115-b7.firebaseapp.com",
  projectId: "pacific-booking-424115-b7",
  storageBucket: "pacific-booking-424115-b7.appspot.com",
  messagingSenderId: "934177505764",
  appId: "1:934177505764:web:ffde3071a67ddad4e7c7f1",
  measurementId: "G-1H67RWLP0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
    app, auth
}
