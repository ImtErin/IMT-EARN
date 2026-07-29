// Firebase Configuration

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";


const firebaseConfig = {

apiKey: "AIzaSyBCXUwAaSh6CN0QfyJzqyvfpJO_nXSqPlc",

authDomain: "imt-earn.firebaseapp.com",

projectId: "imt-earn",

storageBucket: "imt-earn.firebasestorage.app",

messagingSenderId: "295250368100",

appId: "1:295250368100:web:addfd82929441c0819f171",

measurementId: "G-3QG88QC0H6"

};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

const db = getFirestore(app);


export { auth, db };
