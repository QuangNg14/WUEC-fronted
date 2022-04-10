import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCrcPF2UYyvplDJYdOnL6vP5VLNbVgNkUc",
  authDomain: "wuec-tech-project.firebaseapp.com",
  databaseURL: "https://wuec-tech-project-default-rtdb.firebaseio.com",
  projectId: "wuec-tech-project",
  storageBucket: "wuec-tech-project.appspot.com",
  messagingSenderId: "58774396082",
  appId: "1:58774396082:web:4ba53c2b49ac4e0d747dab",
  measurementId: "G-001J51J0WP",
});

export const db = app.firestore();
export const auth = app.auth();
export default app;
