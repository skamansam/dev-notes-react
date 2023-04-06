import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCdd_wcKvecqtC6H_H2rUXE0RGhSnNvtGw",
  authDomain: "dev-notes-24b68.firebaseapp.com",
  projectId: "dev-notes-24b68",
  storageBucket: "dev-notes-24b68.appspot.com",
  messagingSenderId: "909371881812",
  appId: "1:909371881812:web:af68f30339739f047fb0c1",
  measurementId: "G-8GHMD691QX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default {
  app,
  analytics,
};