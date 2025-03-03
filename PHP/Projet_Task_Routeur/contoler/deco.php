<?php
class Deconnexion{
    public function deco(){
        //J'active la session
        session_start();

        //Je détruis la session
        session_destroy();

        //Je redirige vers la page d'accueil index.php
        header('Location:Accueil');
        exit;
    }
}

$deco = new Deconnexion();
$deco->deco();


?>