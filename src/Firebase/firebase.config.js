// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_APP_ID}`
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDTVP9rpsLi3CmfTiLo0i-2D3C-OwxPyf4",
//   authDomain: "multiple-authentication-485d6.firebaseapp.com",
//   projectId: "multiple-authentication-485d6",
//   storageBucket: "multiple-authentication-485d6.appspot.com",
//   messagingSenderId: "752778250785",
//   appId: "1:752778250785:web:ae516d5c455cd04dc57160"
// };

export default firebaseConfig;