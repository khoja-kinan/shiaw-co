<?php  
 
if(isset($_POST['submit'])) {
 $mailto = "info@shiaw.co";  //My email address
 //getting customer data
 $name = $_POST['name']; //getting customer name
 $fromEmail = $_POST['email']; //getting customer email
 $Subject = $_POST['Subject']; //getting customer Subject
 $Message = $_POST['Message'];
 
 //Email body I will receive
 $message = "Cleint Name: " . $name . "\n"
 . "Cleint Email: " . $fromEmail . "\n\n"
 . "Client Subject: " . "\n" . $Subject. "\n" . "Message: ". $Message;
 
 
 //PHP mailer function
 
  $result1 = mail($mailto, $subject, $message, $headers); // This email sent to My address
 
  //Checking if Mails sent successfully
 
//   if ($result1 && $result2) {
//     $success = "Your Message was sent Successfully!";
//   } else {
//     $failed = "Sorry! Message was not sent, Try again Later.";
//   }
 
}
 
?>