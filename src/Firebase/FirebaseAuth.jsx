
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0Hc2dQyrBSx2sVvJLGY6My3Tlg-QHMSQ",
  authDomain: "hackathons-c1683.firebaseapp.com",
  projectId: "hackathons-c1683",
  storageBucket: "hackathons-c1683.appspot.com",
  messagingSenderId: "31307184923",
  appId: "1:31307184923:web:95cefde24abcf376d8b1be"
};

const app = initializeApp(firebaseConfig); 

export const auth = getAuth(app)