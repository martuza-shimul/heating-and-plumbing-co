<?php
// Check for empty fields
if(empty($_POST['first-name'])  		||
   empty($_POST['last-name']) 		||
   empty($_POST['email'])	||
   empty($_POST['message']) 		||
   
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "Please fill up the form Properly, Maybe you have missed something!";
	return false;
   }
	
$first_name = $_POST['first-name'];
$last_name = $_POST['last-name'];
$email_address = $_POST['email'];
$message = $_POST['message'];

	
// Create the email and send the message
$to = 'tripkeys@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Contact Form:  $name";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nFirst-Name: $first_name\n\nLast-Name: $last_name\n\nEmail: $email_address\n\nMessage:\n$message";
$headers = "From: noreply@heatingandplumbingco.uk\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);

// echo "<h4>The details have been sent and a member of staff will be in touch shortly!</h4>";
// header("Location: index.html")	;
header("Location: thank-you.html");
return true;	

?>