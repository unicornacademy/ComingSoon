<?php
$toemail 	= 'zourbuth@gmail.com';
$email		= $_POST['email'];
$message	= "Email subscription from $email";


if( mail( $toemail, 'Newsletter Subscription', $message, 'From: ' . $email )) {
	echo '<p class="message">Your email was sent successfully.</p>';
} else {
	echo '<p class="message warning">There was a problem sending your email.</p>';
}
?>