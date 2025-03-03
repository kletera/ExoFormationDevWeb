<?php
/*PROJET TASK*/
//J'active le mode strict pour le typage
declare(strict_types=1);

//J'active la session
session_start();

//J'inclus les fichiers model dont j'ai besoin
include './model/model_users.php';
include './manager/manager_user.php';

//J'inclus le fichier contenant mes fonctions utilitaires
include './utils/functions.php';

// Class ControlerAccueil
class ControlerAccueil{
    // Attributs
    private ?string $class;
    private ?string $classNav;
    private ?string $message;
    private ?string $messageCo;
    private ?array $listUser;
    // Constructeur
    public function __construct(){
        $this->class="";
        $this->classNav="displayNone";
        $this->message="";
        $this->messageCo="";
        $this->listUser="";
    }

    // GETTER
    public function getClass():?string{
        return $this->class;
    }
    public function getClassNav():?string{
        return $this->classNav;
    }
    public function getMessage():?string{
        return $this->message;
    }
    public function getMessageCo():?string{
        return $this->messageCo;
    }
    public function getListUser():?array{
        return $this->listUser;
    }

    // SETTER
    public function setClass(?string $class):self{
        $this->class=$class;
        return $this;
    }
    public function setClassNav(?string $classNav):self{
        $this->classNav=$classNav;
        return $this;
    }
    public function setMessage(?string $message):self{
        $this->message=$message;
        return $this;
    }
    public function setMessageCO(?string $messageCo):self{
        $this->messageCo=$messageCo;
        return $this;
    }
    public function setListUser(?array $listUser):self{
        $this->listUser=$listUser;
        return $this;
    }

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
    function cardUser(?array $profil):string{
        return "<article style='border-bottom : 3px solid black'>
            <h2>Login : {$profil['login_user']}</h2>
            <p>Nom - Prénom : {$profil['name_user']} - {$profil['first_name_user']}</p>
        </article>";
    }
    public function registerCon(){
        //Tester si le formulaire d'inscription m'est envoyé
        if(isset($_POST["inscription"])){
            //Je lance le test de mes données
            $tab = $this->dataTestInscription();
            //Je vérifie si je suis dans un cas d'erreur
            if($tab['erreur'] != ''){
                $message = $tab['erreur'];
            }else{
                //Création de mon $user à partir de ManagerUser
                $user = new ManagerUser($tab['login_user']);
                
                //J'utilise les Setter pour donner à mon objet le nameUSer, firstNameUser et mdpUser
                $user->setNameUser($tab['name_user'])->setFirstNameUser($tab['first_name_user'])->setMdpUser($tab['password_user']);
        
        
                //Je vérifie que le login est diponible
                if(empty($user->readUserByLogin())){
                    //Si la réponse de la BDD est vide, alors le Login est disponible (car non trouvé en BDD), je peux donc l'utiliser.
                    //Je lance l'ajout de mon utilisateur en BDD
                    $message = $user->addUser();
        
                }else{
                    //Si la réponse de la BDD n'est pas vide, alors ce le login est trouvé en BDD, donc le login n'est pas disponible, et je renvoie un message d'erreur
                    $message="Ce Login existe déjà en BDD !";
                }
            }
        }
        //Test si le formulaire de connexion m'est envoyé
        if(isset($_POST['connexion'])){
            $affichage=new ControlerAccueil();
            //je teste les données de connexion envoyés
            $tab = $affichage->dataTestConnexion();
            
            //je regarde si je suis dans le cas d'erreur
            if($tab['erreur'] != ''){
                //si c'est le cas : j'affiche l'erreur
                $affichage->setMessageCO($tab['erreur']);
                $messageCo = $affichage->getMessageCo();
            }else{
                //Si tout s'est bien passé :
                //Création de mon objet $user à partir du ManagerUser
                $user = new ManagerUser($tab['loginCo']);
        
                //Interroger la BDD pour récupérer les données de l'utilisateurs à partir du login entré
                $data = $user->readUserByLogin();
        
                //Tester si je suis dans le cas d'erreur (problème de communication avec la BDD)
                //Si c'est le cas, je reçois un string, si tout s'est passé je reçois un array
                if(gettype($data) == 'string'){
                    $affichage->setMessageCO($data);
                    $messageCo = $affichage->getMessageCo();
                }else{
                    //Tout s'est bien passé
                    //Je vérifie la réponse de la BDD : vide ou pas ?
                    //Si c'est vide : alors le login n'existe pas en BDD, et j'affiche un message d'erreur
                    if(empty($data)){
                        $affichage->setMessageCO("Erreur de Login et/ou de Mot de Passe !");
                        $messageCo = $affichage->getMessageCo();
                    }else{
                        //Si on trouve le login en BDD
                        //Je vérifie la correspondance des mots de passe
                        if(!password_verify($tab['passwordCo'],$data[0]['mdp_user'])){
                            //Si les mots de passe ne correspondent pas, j'affiche un message d'erreur
                            $affichage->setMessageCO("Erreur de Login et/ou de Mot de Passe !");
                            $messageCo = $affichage->getMessageCo();
                        }else{
                            //Si les mots de passe correspondent, j'enregistre les données de l'utilisateur en SESSION, et j'affiche un message de confimation
                            $_SESSION['id_user'] = $data[0]['id_user'];
                            $_SESSION['name_user'] = $data[0]['name_user'];
                            $_SESSION['first_name_user'] = $data[0]['first_name_user'];
                            $_SESSION['login_user'] = $data[0]['login_user'];
                            
                            $affichage->setMessageCO("{$_SESSION['login_user']} est connecté avec succés !");
                            $messageCo = $affichage->getMessageCo();
                        }
                    }
                }
            }
        }
        
        //Affichage des utilisateur
        //0) Création de mon objet $barman à partir du ManagerUser, j'ai pas de login à donner, donc je donne la valeur NULL
        $barman = new ManagerUser(null);
        
        //1) lancer la récupération des utilisateurs
        $users = $barman->readUsers();
        //2)Traiter le tableau de $user, et afficher chaque utilisateur dedans
        foreach($users as $user){
            $listUser = $listUser.$user.cardUser();
        }
        $affiche=new ControlerAccueil();
        $affiche->setClassNav('displayNone');
        $classNav=$affiche->getClassNav();
        
        //Je vérifie si je suis connecté :
        if(isset($_SESSION['id_user'])){
            //Si je suis connecté, je passe la class displayNone à la section possédant mes formulaires Inscription et Connexion pour les enlever
            //Et j'efface cette class de mes liens Mon Compte et Déconnexion, pour les afficher
            $affiche=new ControlerAccueil();
            $affiche->setClass('displayNone');
            $affiche->setClassNav('');
            $class=$affiche->getClass();
            $classNav=$affiche->getClassNav();
        
        }
    }

}


//J'inclure mes views
include './view/view_header.php';
include './view/view_accueil.php';
include './view/view_footer.php';
?>