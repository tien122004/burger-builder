import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBVjy1HKIHHY-nc4m-aJhLgOH5Nv-Xs5JY",
    authDomain: "burger-builder-1202.firebaseapp.com",
    databaseURL: "https://burger-builder-1202-default-rtdb.firebaseio.com",
    projectId: "burger-builder-1202",
    storageBucket: "burger-builder-1202.firebasestorage.app",
    messagingSenderId: "248655506709",
    appId: "1:248655506709:web:296f34e8f0214bab780d1c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;