    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
    import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-database.js";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";

    const firebaseConfig = {
        apiKey: "AIzaSyCDUxbcYZucNZDug0V8nBNpPZOYyk4q22o",
        authDomain: "iluminator-project-7dcdd.firebaseapp.com",
        databaseURL: "https://iluminator-project-7dcdd-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "iluminator-project-7dcdd",
        storageBucket: "iluminator-project-7dcdd.appspot.com",
        messagingSenderId: "423933239209",
        appId: "1:423933239209:web:8ec2c5a20bc9da22cf2eb8"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();

    const signUp = document.getElementById('signup');
    signUp.addEventListener('click', (e) => {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        set(ref(database, 'users/' + user.uid),{
            username: username,
            email: email
        });

        alert('user created!');
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
        });
    });

    const login = document.getElementById('login');
    login.addEventListener('click', (e) => {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        alert('login successful!');
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
        });
    });

    const logout = document.getElementById('logout');
    logout.addEventListener('click', (e) => {
    signOut(auth)
        .then(() => {
        alert('logout successful!');
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
        });
    });

    onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, update the UI accordingly
        document.getElementById('status').innerHTML = "welcome " + user.email;
        document.getElementById('login-box').style.display = "none";
        document.getElementById('logout').style.display = "block";
    } else {
        // User is signed out, update the UI accordingly
        document.getElementById('status').innerHTML = "login or register";
        document.getElementById('login-box').style.display = "flex";
        document.getElementById('logout').style.display = "none";
    }
    });
