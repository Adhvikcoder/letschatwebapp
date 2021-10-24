var firebaseConfig = {
  apiKey: "AIzaSyDiVByovS8xgoIez6jImRjRipiU5uNKUTg",
  authDomain: "letschatwebapp-3cb04.firebaseapp.com",
  databaseURL: "https://letschatwebapp-3cb04-default-rtdb.firebaseio.com",
  projectId: "letschatwebapp-3cb04",
  storageBucket: "letschatwebapp-3cb04.appspot.com",
  messagingSenderId: "509854141087",
  appId: "1:509854141087:web:c40b5a9c0f36b424ae70aa"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

   user_name = localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML = "Welcome " + user_name;

   function addroom(){
     room_name=document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
        purpose: "adding room_name",
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
   }



   function getdata(){
    function getData() {firebase.database().ref("/").on('value',
    function(snapshot) {document.getElementById("output").innerHTML =
    "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    //Start code
    row =
          "<div class='room_name' id=" +
          Room_names +
          " onclick='redirectToRoomName(this.id)'>#" +
          Room_names +
          "</div><hr>";
        document.getElementById("output").innerHTML += row;
    //End code
    });});}
    getData();
   }


  function rediectToRoomName(){
       localStorage.setItem("room_name");

       window.location="kwitter_page.html";
   }
