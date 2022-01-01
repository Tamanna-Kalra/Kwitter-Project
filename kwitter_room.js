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
 
 user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");
 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
 function addRoom(){
       room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
             purpose : "adding room name"
       });
       localStorage.setItem("room_name" , room_name);
       window.location = "kwitter_page.html";
 }
 function logout() {
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location.replace("kwitter.html");
 }
 function redirectToRoomName(name){
       console.log(name);
       localStorage.setItem("room_name" , name);
       window.location = "kwitter_page.html";
 }
 function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
   });
 });
}
getData();