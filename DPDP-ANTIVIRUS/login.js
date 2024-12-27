function loginAndRedirect() {
    // Get user input
    var email = document.getElementById("mail").value;
    var password = document.getElementById("pass").value;

    // Validate input (client-side validation)
    if (!email || !password) {
        alert("Please enter both email and password.");
        return false;
    }

    // Send data to server for authentication
    var formData = new FormData(document.getElementById("loginForm"));

    // Assuming you have a server-side endpoint for login
    fetch("login.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                loginSuccessful();
                setTimeout(function() {
                    window.location.href = 'app1.html';
                }, 2000); // Redirect after 2 seconds (adjust as needed)
            } else {
                alert("Login failed. Please check your credentials.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });

    // Prevent the form from submitting (handled asynchronously)
    return false;
}

function loginSuccessful() {
    alert("Login Successful!");
    // You can add further logic or UI updates for successful login here
}