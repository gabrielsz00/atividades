const firebaseConfig = {
  apiKey: "AIzaSyBQZUK3z2fOV7ytSmZNnGVJph8vUBZ8N9w",
  authDomain: "vamosconversar-8942a.firebaseapp.com",
  databaseURL: "https://vamosconversar-8942a-default-rtdb.firebaseio.com/",
  projectId: "vamosconversar-8942a",
  storageBucket: "vamosconversar-8942a.appspot.com",
  messagingSenderId: "1040567704202",
  appId: "1:1040567704202:web:b8e73b62f83daab2172b73"
};

firebase.initializeApp(firebaseConfig)

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
