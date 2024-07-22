<?php

// Check if data is posted via AJAX
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
    
    // Sanitize inputs
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    // Process the form (e.g., send email, save to database, etc.)

    // Example response
    $response = array(
        'success' => true,
        'message' => 'Form submitted successfully!'
    );

    // Send JSON response back to JavaScript
    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
} else {
    // Invalid request
    http_response_code(400);
    echo "Invalid request.";
}
?>
