
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
    import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    
 


const firebaseConfig = {
    apiKey: "AIzaSyC5KmqA_ZYVKpIWpZpa-r58Epnk0f0B0CU",
    authDomain: "harvesthq-fd804.firebaseapp.com",
    projectId: "harvesthq-fd804",
    storageBucket: "harvesthq-fd804.appspot.com",
    messagingSenderId: "968917107456",
    appId: "1:968917107456:web:a24a838d028bbb1343e9e5",
    measurementId: "G-B3T1B5TZ9N"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database= getDatabase(app);
  const auth = getAuth();

  Login.addEventListener('click',(e)=>{
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
 
       signInWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
         // Signed in 
         const user = userCredential.user;
 
         const dt = new Date();
          update(ref(database, 'users/' + user.uid),{
           last_login: dt,
         })
 
          alert('User loged in!');
          window.location.href = 'index.html';
         // ...
       })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
 
         alert(errorMessage);
   });
 
})
