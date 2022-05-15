
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCW9pL5Ggf0yXuMY3x-nJt9C7xvWXM_tlg",
      authDomain: "kwitter-62f4b.firebaseapp.com",
      databaseURL: "https://kwitter-62f4b-default-rtdb.firebaseio.com",
      projectId: "kwitter-62f4b",
      storageBucket: "kwitter-62f4b.appspot.com",
      messagingSenderId: "450726901812",
      appId: "1:450726901812:web:3647b47b8d427a6dbeb261"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("user_name");

      document.getElementById("user_name").innerHTML="welcome" + user_name + "!";

      function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"    
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();



function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";   
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

