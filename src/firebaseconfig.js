
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCoavbD4rn4w3KTuPwEhRNfQI29xYmFKIo",
  authDomain: "ecommerce-en-react-c6d3d.firebaseapp.com",
  projectId: "ecommerce-en-react-c6d3d",
  storageBucket: "ecommerce-en-react-c6d3d.appspot.com",
  messagingSenderId: "711786919986",
  appId: "1:711786919986:web:99a7fd03b92691a14aa42b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);