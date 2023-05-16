var firebaseConfig = {
    apiKey: "AIzaSyAVAKynLcSRh-uiUavNpAk1UVPYc-Z_ROw",
    authDomain: "registlog-f1424.firebaseapp.com",
    databaseURL: "https://registlog-f1424-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "registlog-f1424",
    storageBucket: "registlog-f1424.appspot.com",
    messagingSenderId: "1052695560854",
    appId: "1:1052695560854:web:2229ba9c6d48cb26f1f8b7"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// let's code 
var datab  = firebase.database().ref('data');

function UserRegister(){
  var email = document.getElementById('eemail').value;
  var password = document.getElementById('lpassword').value;
  
  firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
    // Реагувати на успішну реєстрацію
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    // Обробити помилку реєстрації
  });
}

const auth = firebase.auth();

function SignIn(){
  var email = document.getElementById('eemail').value;
  var password = document.getElementById('lpassword').value;
  
  const promise = auth.signInWithEmailAndPassword(email, password);
  promise.catch( e => alert(e.msg));
  
  window.open("https://www.google.com","_self");
}

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  var userInfo = datab.push();
  userInfo.set({
    name: getId('fname'),
    email : getId('eemail'),
    password : getId('lpassword')
  });
  alert("Successfully Signed Up");
  console.log("sent");
  document.getElementById('form').reset();
});

function  getId(id){
  return document.getElementById(id).value;
}
