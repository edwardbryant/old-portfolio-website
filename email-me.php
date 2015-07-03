<?

include_once("is-email.php");

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

if (strlen($name) > 0 && strlen($email) > 0 && strlen($message) > 0) {
	if (is_email($email)){
		$to = "hello@edwardbryant.com";
		$subject = "MSG via My Portfolio";
		$headers = 'From: ' .$email. "\r\n" .
    		'Reply-To: ' .$email. "\r\n" .
    		'X-Mailer: PHP/' . phpversion();
		$body = "
		--------------
		name: ".$name."
		email: ".$email."
		message: 
		
		".$message."

		".strlen($name)."
		".strlen($email)."
		".strlen($message)."
		
		--------------
		";
		mail($to,$subject,$body,$headers);
	} else {
		$to = "hello@edwardbryant.com";
		$subject = "ERROR: MSG via My Portfolio";
		$body = "
		!!! Someone attempted to submit your portfolio contact form, but the email doesn't appear to be valid. !!!
		--------------
		name: ".$name."
		email: ".$email."
		message: 
		
		".$message."
		
		--------------
		";
		mail($to,$subject,$body);
	}
}



?>



















