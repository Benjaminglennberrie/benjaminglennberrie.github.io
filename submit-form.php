<?php
  if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get the form fields and sanitize the data
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST['message']);

    // Set the recipient email address
    $to = 'benjaminbrodwolf@gmail.com';

    // Set the email subject
    $subject = 'New message from your website';

    // Set the email headers
    $headers = "From: $name <$email>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";

    // Build the email message
    $email_message = "Name: $name<br>";
    $email_message .= "Email: $email<br><br>";
    $email_message .= "Message:<br>$message";

    // Send the email
    if (mail($to, $subject, $email_message, $headers)) {
      // Email sent successfully, redirect to thank you page
      header('Location: thank-you.html');
      exit;
    } else {
      // Error sending email
      echo "There was an error sending your message. Please try again later.";
    }
  }
?>
