<?php
$message = "";
if(isset($_POST["inscription"])){
    $message = addUser();
}
?>