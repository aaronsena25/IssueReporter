// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyApRgG4pqEbIbbanzBNi0RKwvfXlvYwBAI",
  authDomain: "issue-reporter-9d764.firebaseapp.com",
  projectId: "issue-reporter-9d764",
  storageBucket: "issue-reporter-9d764.firebasestorage.app",
  messagingSenderId: "967022442068",
  appId: "1:967022442068:web:2c64ba61f8d62c68cd9fc1",
  measurementId: "G-XF2KQ66W1N"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get references to services
const database = firebase.database();
const storage = firebase.storage();
