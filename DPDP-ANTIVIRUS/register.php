<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Server-side validation and processing go here
    // For demonstration purposes, this example simply echoes the received data

    $firstName = test_input($_POST["firstName"]);
    $middleName = test_input($_POST["middleName"]);
    $lastName = test_input($_POST["lastName"]);
    $email = test_input($_POST["email"]);
    $password = test_input($_POST["password"]);
    $confirmPassword = test_input($_POST["confirmPassword"]);
    $mobileNumber = test_input($_POST["mobileNumber"]);

    // Example: Check if passwords match
    if ($password !== $confirmPassword) {
        echo "Passwords do not match";
        return;
    }

    // Add more validation and processing logic as needed

    // Example: Echo received data
    echo "Registration successful!\n";
    echo "First Name: $firstName\n";
    echo "Middle Name: $middleName\n";
    echo "Last Name: $lastName\n";
    echo "Email: $email\n";
    echo "Mobile Number: $mobileNumber\n";

    // In a real-world scenario, you would store this data in a database and handle it securely
}

function test_input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>
