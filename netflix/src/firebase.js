import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: 'AIzaSyAmoLnHkv2XXX62a0ABh4HPkcONmZnFEQI',
  authDomain: "netflix-6f75f.firebaseapp.com",
  projectId:"netflix-6f75f",
  storageBucket:"netflix-6f75f.appspot.com",
  messagingSenderId:"928548449892",
  appId: "1:928548449892:web:29576a118e8828ed33b971",
  measurementId: "G-NCDQF6EN3Z"
};

export const app= initializeApp(firebaseConfig); 
export const auth = getAuth(app);

// firebase.initializeApp(firebaseConfig);
// export default firebase;



// const app = initializeApp(firebaseConfig);
