// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBkkDqYhVr2r0oykONa0k-D9kIijqQ-dis",
  authDomain: "kwitter-project-253f1.firebaseapp.com",
  databaseURL: "https://kwitter-project-253f1-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-253f1",
  storageBucket: "kwitter-project-253f1.appspot.com",
  messagingSenderId: "425636297800",
  appId: "1:425636297800:web:2956f87cc1543710656c7d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name" , user_name);
    window.location = "kwitter_room.html";
}