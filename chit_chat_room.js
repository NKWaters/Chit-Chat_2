const config = {
    apiKey: "AIzaSyA64P1KgR7MWC1W7_7JEUTktNeX2u_7I6o",
    authDomain: "chit-chat-4b20f.firebaseapp.com",
    databaseURL: "https://chit-chat-4b20f-default-rtdb.firebaseio.com",
    projectId: "chit-chat-4b20f",
    storageBucket: "chit-chat-4b20f.appspot.com",
    messagingSenderId: "221951867501",
    appId: "1:221951867501:web:3a18de435a3c890d341d64",
    measurementId: "G-CPX78RGXEQ"
  };
  
  firebase.initializeApp(config);
  user_name = localStorage.getItem("Username");
      document.getElementById("user_name").innerHTML = "Welcome " + user_name;

  function logout() {
      localStorage.removeItem("Username");
      window.location = "index.html";
  }