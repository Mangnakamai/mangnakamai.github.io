

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBidim0vsUWmj5vZ2tiPfjg2u41BizYW30",
    authDomain: "mangna-kamak.firebaseapp.com",
    projectId: "mangna-kamak",
    storageBucket: "mangna-kamak.firebasestorage.app",
    messagingSenderId: "952226764486",
    appId: "1:952226764486:web:083cbe5d1ca4ea7720a9c7",
    measurementId: "G-TLH6VFEJPR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.useDeviceLanguage();

let recaptchaVerifier;

window.onload = () => {
    recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        size: 'normal',
        callback: (response) => {
            console.log("reCAPTCHA verified");
        }
    }, auth);

    document.getElementById("send-otp-btn").addEventListener("click", sendOTP);
    document.getElementById("verify-otp-btn").addEventListener("click", verifyOTP);
    document.getElementById("logout-btn").addEventListener("click", logout);
};

function sendOTP() {
    const phoneNumber = document.getElementById("phone").value;
    signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            document.getElementById("login-form").style.display = "none";
            document.getElementById("verify-form").style.display = "block";
        })
        .catch((error) => {
            console.error("Error sending OTP:", error);
            alert("Failed to send OTP. Please try again.");
        });
}

function verifyOTP() {
    let otpCode = "";
    document.querySelectorAll(".otp-input").forEach(input => otpCode += input.value);

    window.confirmationResult.confirm(otpCode)
        .then((result) => {
            const user = result.user;
            document.getElementById("verify-form").style.display = "none";
            document.getElementById("dashboard").style.display = "block";
        })
        .catch((error) => {
            console.error("Error verifying OTP:", error);
            alert("Invalid OTP. Please try again.");
        });
}

function logout() {
    signOut(auth)
        .then(() => {
            document.getElementById("dashboard").style.display = "none";
            document.getElementById("login-form").style.display = "block";
        })
        .catch((error) => console.error("Error logging out:", error));
}