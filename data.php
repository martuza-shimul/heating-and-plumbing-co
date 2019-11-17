<?php
// Check for empty fields
if(empty($_POST['first-name'])  		||
   empty($_POST['phone']) 		||
   empty($_POST['email'])	||
   empty($_POST['postcode']) 		||
   
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "Please fill up the form Properly, Maybe you have missed something!";
	return false;
   }

   
$first = $_POST['first'];
$second = $_POST['check'];
$fixture = implode(', ', $second);

$type = $_POST['type'];
$third = $_POST['third'];
$fourth = $_POST['fourth'];


// if(!empty($second)) {

//    foreach($_POST['lang'] as $value){
//        echo "value : ".$value.'<br/>';
//    }

// }

$first_name = $_POST['first-name'];
$phone = $_POST['phone'];
$email_address = $_POST['email'];
$postcode = $_POST['postcode'];

	
// Create the email and send the message

$to = 'tripkeys@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Quote Engine:  $first_name";
$email_body = "You have received a new message from your website Quote Engine .\n\n"."Here are the details:\n\nName: $first_name\n\nPhone: $phone\n\nEmail: $email_address\n\n Postcode: $postcode \n\n Here is the Quote Request: \n Type of Work: $first\n Fixture/Appliance: $fixture \n Type of Property: $type \n Timeline: $third \n Materials: $fourth ";
$headers = "From: noreply@heatingandplumbingco.uk\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.

$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);

// echo "<h4>The details have been sent and a member of staff will be in touch shortly!</h4>";

header("Location: thank-you.html");
return true;	

?>