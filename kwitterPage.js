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

userName = localStorage.getItem("userName")
roomName = localStorage.getItem("roomName")


    function send(){
      msg = document.getElementById("msg").value
      firebase.database().ref(roomName).push({
         name: userName, 
         mensage: msg,
            like: 0
      })
      document.getElementById("msg").value = ""
      
}



function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
//Início do código

//Fim do código
      } });  }); }

      getData();
