<?php
//J'active le mode strict pour le typage
declare(strict_types=1);

//J'active la session
session_start();

//J'inclure mes resources communes à chaque route
include './utils/functions.php';
include './model/model_users.php';
include './manager/manager_user.php';
include './model/model_categories.php';
include './manager/manager_categories.php';
include './model/model_tasks.php';
include './manager/manager_tasks.php';
include './controler/controlerHeader.php';

//Je crée les objets commun à toutes les routes
//J'instancie mon header
$header = new ControlerHeader();

//Récupération de l'url entrée par l'utilisateur
$url = parse_url($_SERVER['REQUEST_URI']);

//Je dois récupérer le path entré par l'utilisateur, en bref, la page demandé
$path = (isset($url['path'])) ? $url['path'] : '/';

//Je crée mes Routes à l'aide d'un switch
switch($path){
    // page d'accueil
    case '/php/Exercice/POO/Projet_Task_POO/' :
        //J'inclus mon controlerAccueil
        include './controler/accueil.php';
        //J'instancie mon Controller
        $controlerAccueil = new ControlerAccueil();
        $controlerAccueil->logInUser();
        $controlerAccueil->registerUser();
        $controlerAccueil->displayListUsers();
        $header->displayNav();

        //J'inclure mes views
        include './view/view_header.php';
        include './view/view_accueil.php';
        break;

    //page categories
    case '/php/Exercice/POO/Projet_Task_POO/categories' :
        //J'inclus le controler
        include './controler/categories.php';

        //Instanciation d'un controlerCategory
        $category = new ControlerCategory();
        $category->registerCategory();
        $category->displayCategory();
        $header->displayNav();

        //J'inclus mes views
        include './view/view_header.php';
        include './view/view_categorie.php';
        break;

    //page mon compte
    case '/php/Exercice/POO/Projet_Task_POO/moncompte' :
        //J'inclus le controler
        include './controler/moncompte.php';
        //Instancier un objet moncompte
        $moncompte = new ControlerCompte();
        $moncompte->displayUserAccount();
        $header->displayNav();

        //J'inclus mes view
        include './view/view_header.php';
        include './view/view_moncompte.php';
        break;

    //page mes tâches
    case '/php/Exercice/POO/Projet_Task_POO/mestaches' :
        //J'inclus le controler
        include './controler/mytasks.php';
        //J'instancie mon objet
        $tasks = new ControlerTask();
        $tasks->resgisterTask();
        $tasks->displayListTask();
        $tasks->displaySelectCategory();
        $header->displayNav();

        //j'inclus les view
        include './view/view_header.php';
        include './view/view_task.php';
        break;

    //page deconnexion
    case '/php/Exercice/POO/Projet_Task_POO/deconnexion' :
        include './controler/deco.php';
        $deco = new Deconnexion();
        $deco->deco();
        break;

    //page pardefault
    default :
        echo '404';
        break;
}

//J'inclus à la fin le footer commun à tous
include './view/view_footer.php';

?>