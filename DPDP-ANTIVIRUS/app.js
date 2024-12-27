// Add 'active' class to clicked menu item
const items = document.querySelectorAll('.item');
items.forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector(".active").classList.remove('active');
        item.classList.add('active');
    });
});

// Handle login button click
const loginButton = document.querySelector('.LOGIN-button');
loginButton.addEventListener("click", (e) => {
    e.preventDefault();

    // Get values from the input fields
    const name = document.querySelector('#name').value;
    const pass = document.querySelector('#pass').value;

    // Perform login validation
    if (name === "admin" && pass === "adminpassword") {
        // If the login is successful, redirect to "app1.html"
        redirectToLogin();
    } else {
        // Handle unsuccessful login (add your own logic)
        console.log("Invalid login credentials");
    }
});

// Add an additional button for admin login dynamically
const nameInput = document.querySelector('#name');
nameInput.addEventListener("keyup", () => {
    if (nameInput.value === "admin") {
        const existingAdminButton = document.querySelector('#adlogin');
        if (!existingAdminButton) {
            const newButton = document.createElement('button');
            newButton.setAttribute('id', 'adlogin');
            newButton.innerText = "ADMIN LOGIN";
            newButton.addEventListener("click", redirectToAdminLogin); // Define admin login redirection function
            document.querySelector('form').appendChild(newButton);
        }
    } else {
        const existingAdminButton = document.querySelector('#adlogin');
        if (existingAdminButton) {
            existingAdminButton.remove();
        }
    }
});

// Redirect to "app1.html"
function redirectToLogin() {
    window.location.href = "app1.html";
}

// Redirect to admin login page (modify as needed)
function redirectToAdminLogin() {
    window.location.href = "app1.html";
}