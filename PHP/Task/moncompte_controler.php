<?php
//J'active la SESSION
session_start();

//Déclaration des variables d'affichage
$login = "";
$nom = "";
$prenom = "";

//AFFICHER LES DONNES DE L'UTILISATEURS  ENREGISTREES EN SESSION
//1er Etape : je teste si j'ai bien des SESSIONS d'enregistré
if(isset($_SESSION['id_user'])){
    //2nd Etape : je transmets les données de SESSIONS à mes variables d'affichages
    $login = $_SESSION['login_user'];
    $nom = $_SESSION['name_user'];
    $prenom = $_SESSION['first_name_user'];
}

// Mise en place du HTML
include "./view/view_header.php";
include "./view/view_moncompte.php";
?>