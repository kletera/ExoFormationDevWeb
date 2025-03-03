<?php
class ManagerUser extends ModelUser {
    //Méthode
    //Fonction pour envoyer les données en insertion à la BDD
    //Param : string $login_user, string $password_user, optionel string $name_user, optionel string first_name_user
    //Return : string
    function addUser():string{
        //1Er Etape : Instancier l'objet de connexion PDO
        $bdd = new PDO('mysql:host=localhost;dbname=task5','root','root',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

        //Récupération des données de l'objet
        $name_user = $this->getNameUser();
        $first_name_user = $this->getFirstNameUser();
        $login_user = $this->getLoginUser();
        $password_user = $this->getMdpUser();

        //Try...Catch
        try{
            //2nd Etape : préparer ma requête INSERT INTO
            $req = $bdd->prepare('INSERT INTO users (name_user, first_name_user, login_user, mdp_user) VALUES (?,?,?,?)');

            //3eme Etape : Binding de Paramètre pour relier chaque ? à sa donnée
            $req->bindParam(1,$name_user,PDO::PARAM_STR);
            $req->bindParam(2,$first_name_user,PDO::PARAM_STR);
            $req->bindParam(3,$login_user,PDO::PARAM_STR);
            $req->bindParam(4,$password_user,PDO::PARAM_STR);

            //4eme Etape : exécution de la requête
            $req->execute();

            //5eme Etape : Retourne un message de confirmation
            return "$name_user $first_name_user , dont le login est : $login_user , a été enregistré avec succès !";
        }catch(EXCEPTION $error){
            return $error->getMessage();
        }
    }

    //Fonction pour récupérer tous les utilisateurs en BDD
    //Param : void
    //Return : array | string
    function readUsers():array | string{
        //1Er Etape : Instancier l'objet de connexion PDO
        $bdd = new PDO('mysql:host=localhost;dbname=task5','root','root',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

        //Try...Catch
        try{
            //2nd Etape : préparer ma requête SELECT
            $req = $bdd->prepare('SELECT id_user, name_user, first_name_user, login_user, mdp_user FROM users');

            //3eme Etape : executer la requête
            $req->execute();

            //4eme Etape : Récupère les réponses de la BDD
            $data = $req->fetchAll(PDO::FETCH_ASSOC);

            //5eme Etape : je retourne mes $data
            return $data;
        }catch(EXCEPTION $error){
            return $error->getMessage();
        }
    }

    //Fonction pour récupérer un utilisateurs en BDD selon un login précis
    //Param : string
    //Return : array | string
    function readUserByLogin():array | string{
        //1Er Etape : Instancier l'objet de connexion PDO
        $bdd = new PDO('mysql:host=localhost;dbname=task5','root','root',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

        //Récupération du login depuis l'objet
        $login_user = $this->getLoginUser();

        //Try...Catch
        try{
            //2nd Etape : préparer ma requête SELECT
            $req = $bdd->prepare('SELECT id_user, name_user, first_name_user, login_user, mdp_user FROM users WHERE login_user = ?');

            //3Eme Etape : introduire le login de l'utilisateur dans ma requête avec du Binding de Paramètre
            $req->bindParam(1,$login_user,PDO::PARAM_STR);

            //4eme Etape : executer la requête
            $req->execute();

            //5eme Etape : Récupère les réponses de la BDD
            $data = $req->fetchAll(PDO::FETCH_ASSOC);

            //6eme Etape : je retourne mes $data
            return $data;
        }catch(EXCEPTION $error){
            return $error->getMessage();
        }
    }
}

?>