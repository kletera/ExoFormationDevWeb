<?php
//Récupération de l'url entrée par l'utilisateur
$url = parse_url($_SERVER['REQUEST_URI']);

//test soit l'url a une route sinon on renvoi à la racine
$path = isset($url['path']) ? $url['path'] : '/';

//MISE EN PLACE DE NOS ROUTES AVEC UN SWITCH
switch($path){
    case '/php/Exercice/ROUTEUR/' :
        include './model/model_article.php';
        include './utils/functions.php';
        include './controler/accueil.php';
        include './view/view_header.php';
        include './view/view_accueil.php';
        include './view/view_footer.php';
        break;
    case '/php/Exercice/ROUTEUR/jesuiscontent' :
        include './controler/blog.php';
        break;
    default :
        echo "<h1>404 NOT FOUND</h1>";
        break;
}

?>