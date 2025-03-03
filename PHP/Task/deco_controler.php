<?php
//J'active la session
session_start();

//Je dÃ©truis la session
session_destroy();

//Je redirige vers la page d'accueil index.php
header('Location:index_controler.php');
exit;

?>