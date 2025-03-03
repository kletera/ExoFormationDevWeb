<?php
    //J'active la session
    session_start();
    
    //Analyse de l'URL avec parse_url() et retourne ses composants
    $url = parse_url($_SERVER['REQUEST_URI']);

    //test soit l'url a une route sinon on renvoi à la racine
    $path = isset($url['path']) ? $url['path'] : '/';

    /*--------------------------ROUTER -----------------------------*/

    //test de la valeur $path dans l'URL et import de la ressource
    switch($path){
        case $path === '/PHP/Projet_Task_Routeur/Accueil';
            //J'inclus les fichiers model dont j'ai besoin
            include 'model/model_users.php';
            include 'manager/manager_user.php';
            include 'contoler/controlerHeader.php';
            //J'inclus le fichier contenant mes fonctions utilitaires
            include 'utils/functions.php';
            // controler
            include "contoler/index.php";
            //J'inclure mes views
            include './view/view_header.php';
            include './view/view_accueil.php';
            include './view/view_footer.php';
            break;
        case $path ==='/PHP/Projet_Task_Routeur/Mes_Categories';
            //J'inclus mes ressources (fichier utilitaire et model)
            include './utils/functions.php';
            include './model/model_categories.php';
            include './manager/manager_categories.php';
            include 'contoler/controlerHeader.php';
            // Controler
            include 'contoler/categories.php';
            //J'inclus mes views
            include './view/view_header.php';
            include './view/view_categorie.php';
            include './view/view_footer.php';
            break;
        case $path ==='/PHP/Projet_Task_Routeur/Mes_Taches';
            //J'inclus mes ressources (fonction utilitaire, model)
            include './utils/functions.php';
            include './model/model_categories.php';
            include './model/model_tasks.php';
            include './manager/manager_tasks.php';
            include './manager/manager_categories.php';
            include 'contoler/controlerHeader.php';
            // Controler
            include 'contoler/mytasks.php';
            //j'inclus les view
            include './view/view_header.php';
            include './view/view_task.php';
            include './view/view_footer.php';
            break;
        case $path === '/PHP/Projet_Task_Routeur/Mon_Compte';
            //Inclusion du ControlerHeader
            include 'contoler/controlerHeader.php';
            // Controler
            include 'contoler/moncompte.php';
            //J'inclus mes view
            include './view/view_header.php';
            include './view/view_moncompte.php';
            include './view/view_footer.php';
            break;
        case $path === '/PHP/Projet_Task_Routeur/Deconnexion';
            // Controler
            include 'contoler/deco.php';
            break;

    }

?>