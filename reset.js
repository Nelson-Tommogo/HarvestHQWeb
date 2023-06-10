
// Your web app's Firebase configuration
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
const auth = getAuth(app);

// Function to handle password reset
function handlePasswordReset(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;

    // Send password reset email
    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Password reset email sent. Please check your inbox.");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage);
        });
}

// Event listener for password reset form submission
document.getElementById("passwordResetForm").addEventListener("submit", handlePasswordReset);
