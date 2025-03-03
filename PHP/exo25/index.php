<?php

//J'active la session
session_start();

//Inclure des fichiers commun : le fichier utiliser functions.php
include "utils/function.php";
include "model/model_article.php";

// Analyse de l'URL avec parse_url() et retourne ses composants
$url=parse_url($_SERVER['REQUEST_URI']);

// test soit l'url a une route sinon on renvoi à la racine
$path=isset($url['path']) ? $url['path'] : '/';

// Routeur
// test de la valeur $path dans l'URL et import de la ressource
switch($path){
    case $path === "/PHP/exo25/":
        include "controler/controler_index.php";
        include "view/view_index.php";
        break;
}
?>
