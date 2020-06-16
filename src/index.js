import React from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.15.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.15.1/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
// apiKey: "AIzaSyDrBfyuwdunZsMvmJORbaKkjgTXc4K_ju0",
// authDomain: "campus-recruitment-syste-90273.firebaseapp.com",
// databaseURL: "https://campus-recruitment-syste-90273.firebaseio.com",
// projectId: "campus-recruitment-syste-90273",
// storageBucket: "campus-recruitment-syste-90273.appspot.com",
// messagingSenderId: "633947511635",
// appId: "1:633947511635:web:e4ec271df8be6244e11fa6",
// measurementId: "G-1YKXE6950T"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>
