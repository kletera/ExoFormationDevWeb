<?php
    //J'active la session
    session_start();

    //Inclure des fichiers commun : le fichier utiliser functions.php
    include './utils/functions.php';
    include './model/model_user.php';

    //Analyse de l'URL avec parse_url() et retourne ses composants
    $url = parse_url($_SERVER['REQUEST_URI']);

    //test soit l'url a une route sinon on renvoi à la racine
    $path = isset($url['path']) ? $url['path'] : '/';

    /*--------------------------ROUTER -----------------------------*/

    //test de la valeur $path dans l'URL et import de la ressource
    switch($path){
        //route /projet/test -> ./test.php
        case $path === "/PHP/Demo_ROUTEUR/" :
            include './controler/accueil.php';
            include './view/view_header.php';
            include './view/view_accueil.php';
            break ;
        //route /projet/addUser -> ./controler/controler_add_user.php
        case $path === "/PHP/Demo_ROUTEUR/tata":
            include './controler/moncompte.php';
            include './view/view_header.php';
            include './view/view_moncompte.php';
            break ;
    }
?>