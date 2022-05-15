//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCW9pL5Ggf0yXuMY3x-nJt9C7xvWXM_tlg",
      authDomain: "kwitter-62f4b.firebaseapp.com",
      databaseURL: "https://kwitter-62f4b-default-rtdb.firebaseio.com",
      projectId: "kwitter-62f4b",
      storageBucket: "kwitter-62f4b.appspot.com",
      messagingSenderId: "450726901812",
      appId: "1:450726901812:web:3647b47b8d427a6dbeb261"
    };

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name']
message = message-data['message']
like = message_data['data']
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'><'h4>"; 
message_wirh_tag = "<h4 class='message_h4'>"+ message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" oncllick='updateLike(this.id)'>";
span_with_tag = "<span class='glphicon glyphicon-thumbs_up'>Like: "+like +"/span></button><hr>";

row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;



//End code
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).ariaValueMax;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
}
