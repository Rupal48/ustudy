import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_YT_API_KEY_,
    authDomain: "ustudy4444.firebaseapp.com",
    projectId: "ustudy4444",
    storageBucket: "ustudy4444.appspot.com",
    messagingSenderId: "762000288604",
    appId: "1:762000288604:web:3dfda9ab4c9ae6f9696f99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the auth service
const auth = getAuth(app);


export default auth;