<?php
// Assume you have a database connection
// Replace "your_db_host", "your_db_user", "your_db_password", "your_db_name" with actual values
$mysqli = new mysqli("your_db_host", "your_db_user", "your_db_password", "your_db_name");

if ($mysqli->connect_error) {
    die('Connect Error (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error);
}

// Get user input
$email = $_POST['email'];
$password = $_POST['password'];

// Validate input (server-side validation)
if (empty($email) || empty($password)) {
    echo json_encode(['success' => false]);
    exit;
}

// Fetch user data from the database based on the email
$stmt = $mysqli->prepare("SELECT id, password FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows === 1) {
    $stmt->bind_result($userId, $hashedPassword);
    $stmt->fetch();

    // Verify the entered password against the stored hashed password
    if (password_verify($password, $hashedPassword)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
} else {
    echo json_encode(['success' => false]);
}

$stmt->close();
$mysqli->close();
?>
