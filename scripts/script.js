document.addEventListener("DOMContentLoaded", function() {
    let balance = 100; // Default balance
    const balanceBtn = document.getElementById("balanceBtn");

    balanceBtn.addEventListener("click", function() {
        alert("Your Balance: $" + balance);
    });
});