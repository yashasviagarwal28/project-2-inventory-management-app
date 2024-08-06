// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Import Firestore
import { getAnalytics } from 'firebase/analytics'; // Import Analytics (optional)

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD19xf95l0TrUSV2zLg4XoS9ljDo-9aJnY",
    authDomain: "inventory-management-63183.firebaseapp.com",
    projectId: "inventory-management-63183",
    storageBucket: "inventory-management-63183.appspot.com",
    messagingSenderId: "981382976650",
    appId: "1:981382976650:web:7efc4a56d8a93d17f0c973",
    measurementId: "G-8K41Y0N5CG"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Analytics
const firestore = getFirestore(app);
const analytics = getAnalytics(app); // Optional

// Export Firestore instance
export { firestore };
