import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAMRydlD04Ui3p7IEIDDpEjLJjnxgDoDsQ",
    authDomain: "nodell-c25fc.firebaseapp.com",
    databaseURL: "https://nodell-c25fc-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "nodell-c25fc",
    storageBucket: "nodell-c25fc.appspot.com",
    messagingSenderId: "542127626093",
    appId: "1:542127626093:web:23a4454997fbde73daec64",
    measurementId: "G-X7L5S61E7L"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default {app, analytics, auth};
