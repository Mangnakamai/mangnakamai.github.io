// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAiZ-5p3BwQiL6y5Vr_-U0PY2_c8-6bXg",
    authDomain: "mangna-kamai.firebaseapp.com",
    projectId: "mangna-kamai",
    storageBucket: "mangna-kamai.firebasestorage.app",
    messagingSenderId: "331448209314",
    appId: "1:331448209314:web:274f289a8d5671cc546cfb",
    measurementId: "G-07NYJJKVF3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login Form
document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const phoneNumber = document.getElementById("loginPhoneNumber").value;
    const password = document.getElementById("loginPassword").value;

    // Firebase Authentication
    const email = `${phoneNumber}@example.com`; // Convert phone to email-like format
    auth.signInWithEmailAndPassword(email, password)
        .then(() => alert("Login successful!"))
        .catch((error) => alert(error.message));
});

// Registration Form
document.getElementById("registration-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Firebase Authentication
    const email = `${phoneNumber}@example.com`;
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            alert("Registration successful!");
            switchToLogin();
        })
        .catch((error) => alert(error.message));
});

// Switch to Registration Form
document.getElementById("register-link").addEventListener("click", () => {
    document.getElementById("login-container").classList.add("hidden");
    document.getElementById("form-container").classList.remove("hidden");
});

// Switch to Login Form
document.getElementById("login-link").addEventListener("click", () => {
    document.getElementById("form-container").classList.add("hidden");
    document.getElementById("login-container").classList.remove("hidden");
});
