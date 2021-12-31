<?php
if($_POST["cf-message"]) {
mail("krtskronos@gmail.com", "Here is the sample subject line",
$_POST["Insert Your Message"]. "From: krtskronos@gmail.com");
}
?>