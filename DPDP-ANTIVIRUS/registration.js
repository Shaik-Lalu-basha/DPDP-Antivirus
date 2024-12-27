// Add any additional client-side validation logic here
// This script is linked in the head of the HTML file

function registerAndRedirect() {
    // Perform registration logic here
    // You can use AJAX to send data to the server or redirect to a PHP file for server-side processing

    // Display registration successful notification
    registrationSuccessful();

    // Redirect to app1.html after notification
    setTimeout(function() {
        window.location.href = 'app1.html';
    }, 2000); // Redirect after 2 seconds (adjust as needed)
}

function registrationSuccessful() {
    alert("Registration Successful!");
    // You can add further logic or UI updates for successful registration here
}