import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import {initializeApp} from "firebase/app";

function App() {
    const firebaseConfig = {
        apiKey: "AIzaSyBP3EK6mQWdhdT0njW1PnP7Z6nPv6AzvUU",
        authDomain: "frontendlab5.firebaseapp.com",
        projectId: "frontendlab5",
        storageBucket: "frontendlab5.appspot.com",
        messagingSenderId: "201245358397",
        appId: "1:201245358397:web:e47117fe7d22abafeaed54",
        measurementId: "G-CSDR9GK46R"
    };
    initializeApp(firebaseConfig);

  return (
      <div>
        <Header/>
      </div>
  );
}

export default App;
