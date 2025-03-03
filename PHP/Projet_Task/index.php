<?php
/*PROJET TASK*/
//Je déclare le mode strict
declare(strict_types=1);

//J'active la session
session_start();

//J'inclus les fichiers model dont j'ai besoin
include './model/model_users.php';

//J'inclus le fichier contenant mes fonctions utilitaires
include './utils/functions.php';

//Déclaration des variables d'affichages
$class = ""; //J'affiche les formulaires de Connexion et d'Inscription
$classNav = "displayNone"; //J'enlève les liens Mon Compte et Déconnexion
$message = "";
$messageCo = "";
$listUser = "";

//Fonction pour tester les données du formulaire d'inscription
//Param : void
//Return : array['name_user'=> string, 'first_name_user'=> string, 'login_user' => string, 'password_user' => string, 'erreur' => string]
function dataTestInscription(){
    //1er Etape de sécurité : vérifie si les champs obligatoires sont vides
    if(empty($_POST["login_user"]) || empty($_POST["password_user"])){
        return ["name_user"=>'',"first_name_user"=>'',"login_user"=>'',"password_user"=>'',"erreur"=>'Veuillez remplir le Login ET le Mot de Passe !'];
    }    
    //2nd Etape de sécurité : nettoyage
    $name_user = sanitize($_POST['name_user']);
    $first_name_user = sanitize($_POST['first_name_user']);
    $login_user = sanitize($_POST["login_user"]);
    $password_user = sanitize($_POST["password_user"]);

    //3eme Etape de sécurité : Vérifier que les données sont au bon format
    if(!filter_var($login_user,FILTER_VALIDATE_EMAIL)){
        return ["name_user"=>'',"first_name_user"=>'',"login_user"=>'',"password_user"=>'',"erreur"=>'Login pas au bon format !'];
    }

    //4eme Etape de sécurité : hasher le mot de passe
    $password_user = password_hash($password_user,PASSWORD_BCRYPT);

    $new= new ModelUser($_POST["login_user"]);
    $new->setNameUser($name_user)->setFirstNameUser($first_name_user)->setLoginUser($login_user)->setMdpUser($password_user);

    return ["name_user"=>$name_user,"first_name_user"=>$first_name_user,"login_user"=>$login_user,"password_user"=>$password_user,"erreur"=>''];
}

//Fonction pour tester les données du formulaire de connexion
//Param : void
//Return : array['loginCo' => string, 'passwordCo' => string, 'erreur' => string]
function dataTestConnexion(){
    //1er Etape de sécurité : vérifie si les champs obligatoires sont vides
    if(empty($_POST["loginCo"]) || empty($_POST["passwordCo"])){
        return ["loginCo"=>'',"passwordCo"=>'',"erreur"=>'Veuillez remplir le Login ET le Mot de Passe !'];
    }

    //2nd Etape de sécurité : nettoyage
    $loginCo = sanitize($_POST["loginCo"]);
    $passwordCo = sanitize($_POST["passwordCo"]);

    //3eme Etape de sécurité : Vérifier que les données sont au bon format
    if(!filter_var($loginCo,FILTER_VALIDATE_EMAIL)){
        return ["loginCo"=>'',"passwordCo"=>'',"erreur"=>'Login pas au bon format !'];
    }

    return ["loginCo"=>$loginCo,"passwordCo"=>$passwordCo,"erreur"=>''];
}

//Fonction pour mettre en forme un profil user
//Param : array["id_user" => INT,"name_user" => string, "first_name_user" => string, "login_user" => string, "mdp_user" => string]
//Return : string
function cardUser($profil){
    return "<article style='border-bottom : 3px solid black'>
        <h2>Login : {$profil['login_user']}</h2>
        <p>Nom - Prénom : {$profil['name_user']} - {$profil['first_name_user']}</p>
    </article>";
}

//Tester si le formulaire d'inscription m'est envoyé
if(isset($_POST["inscription"])){
    //Je lance le test de mes données
    $tab = dataTestInscription();

    //Je vérifie si je suis dans un cas d'erreur
    if($tab['erreur'] != ''){
        $message = $tab['erreur'];
    }else{
        //Je vérifie que le login est diponible
        if(empty($new->readUserByLogin())){
            //Si la réponse de la BDD est vide, alors le Login est disponible (car non trouvé en BDD), je peux donc l'utiliser.
            //Je lance l'ajout de mon utilisateur en BDD
            $message = $new->addUser();

        }else{
            //Si la réponse de la BDD n'est pas vide, alors ce le login est trouvé en BDD, donc le login n'est pas disponible, et je renvoie un message d'erreur
            $message="Ce Login existe déjà en BDD !";
        }
    }
}

//Test si le formulaire de connexion m'est envoyé
if(isset($_POST['connexion'])){
    //je teste les données de connexion envoyés
    $tab = dataTestConnexion();

    //je regarde si je suis dans le cas d'erreur
    if($tab['erreur'] != ''){
        //si c'est le cas : j'affiche l'erreur
        $messageCo = $tab['erreur'];
    }else{
        $user=new ModelUser($tab['loginCo']);
        //Si tout s'est bien passé :
        //Interroger la BDD pour récupérer les données de l'utilisateurs à partir du login entré
        $data = $new->readUserByLogin();

        //Tester si je suis dans le cas d'erreur (problème de communication avec la BDD)
        //Si c'est le cas, je reçois un string, si tout s'est passé je reçois un array
        if(gettype($data) == 'string'){
            $messageCo = $data;
        }else{
            //Tout s'est bien passé
            //Je vérifie la réponse de la BDD : vide ou pas ?
            //Si c'est vide : alors le login n'existe pas en BDD, et j'affiche un message d'erreur
            if(empty($data)){
                $messageCo = "Erreur de Login et/ou de Mot de Passe !";
            }else{
                //Si on trouve le login en BDD
                //Je vérifie la correspondance des mots de passe
                if(!password_verify($tab['passwordCo'],$data[0]['mdp_user'])){
                    //Si les mots de passe ne correspondent pas, j'affiche un message d'erreur
                    $messageCo = "Erreur de Login et/ou de Mot de Passe !";
                }else{
                    //Si les mots de passe correspondent, j'enregistre les données de l'utilisateur en SESSION, et j'affiche un message de confimation
                    $_SESSION['id_user'] = $data[0]['id_user'];
                    $_SESSION['name_user'] = $data[0]['name_user'];
                    $_SESSION['first_name_user'] = $data[0]['first_name_user'];
                    $_SESSION['login_user'] = $data[0]['login_user'];
                    
                    $messageCo = "{$_SESSION['login_user']} est connecté avec succés !";
                }
            }
        }
    }
}

//Affichage des utilisateur
//1) lancer la récupération des utilisateurs
$new=new ModelUser(null);
$users = $new->readUsers();

//2)Traiter le tableau de $user, et afficher chaque utilisateur dedans
foreach($users as $user){
    $listUser = $listUser.cardUser($user);
}

//Je vérifie si je suis connecté :
if(isset($_SESSION['id_user'])){
    //Si je suis connecté, je passe la class displayNone à la section possédant mes formulaires Inscription et Connexion pour les enlever
    //Et j'efface cette class de mes liens Mon Compte et Déconnexion, pour les afficher
    $class = "displayNone";
    $classNav = "";
}

//J'inclure mes views
include './view/view_header.php';
include './view/view_accueil.php';
include './view/view_footer.php';
?>