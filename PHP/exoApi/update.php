<?php
// ROUTE POUR RECUPERER LA LISTE DES UTILISATEURS (Method GET)
// Headers requis
// Accès depuis n'importe quel site ou appareil (*)
header("Access-Control-Allow-Origin: *");

// Format des données envoyées
header("Content-Type: application/json; charset=UTF-8");

// Méthode autorisée, ici POST, mais ça peut être GET, PUT ou DELETE
header("Access-Control-Allow-Methods: PUT");

// Durée de vie de la requête
header("Access-Control-Max-Age: 3600");

// Entêtes autorisées
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if($_SERVER['REQUEST_METHOD'] != 'PUT'){
    //Encode le code de réponse HTTP
    http_response_code(405);

    //Création du message d'erreur
    $data = ["erreur" => "Méthode non autorisée. Vous n'avez utilisé une requête de type PUT !"];

    //encode notre message en JSON
    $json = json_encode($data);

    //Envoyer les data via un affichae
    echo $json;

}else{
    //Récupération le JSON
    $json = file_get_contents('php://input');

    //Dechiffrage du json
    $data = json_decode($json);

    //TRAITEMENT DE NOS DATAS
    //1) Etape de sécurité
    //Vérification des champs vides
    if(!empty($data->new_login_user) && !empty($data->old_login_user)){
        //Verification le format des données
        if(filter_var($data->new_login_user, FILTER_VALIDATE_EMAIL)){
            //Nettoyage des données
            $newLogin = htmlentities(strip_tags(stripslashes(trim($data->new_login_user))));
            $oldLogin = htmlentities(strip_tags(stripslashes(trim($data->old_login_user))));

            //Vérification du Login disponible ou pas
            $bdd = new PDO('mysql:host=localhost;dbname=task','root','',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
            //Try catch pour vérifier le login
            try{
                // Verification si on a l'ancien login
                $req = $bdd->prepare('SELECT id_user, name_user, first_name_user, login_user, mdp_user FROM users WHERE login_user = ?');
    
                //Binding de Param
                $req->bindParam(1,$oldLogin,PDO::PARAM_STR);
    
                //Execution de la requête
                $req->execute();
    
                //Récupère la réponse de la BDD
                $data = $req->fetchAll(PDO::FETCH_ASSOC);
                //On vérifi si data est vide ou pas
                if(!empty($data)){
                    // Revoire la condition mais ca marche
                    //Le login est disponible, et on peut l'utilisateur en BDD
                    $req = $bdd->prepare('UPDATE users SET login_user = ? WHERE login_user= ?');

                    $req->bindParam(1,$newLogin,PDO::PARAM_STR);
                    $req->bindParam(2,$oldLogin,PDO::PARAM_STR);

                    //Execution de la requête
                    $req->execute();

                    //Formatage du message de confirmation
                    $data=["message" => "$newLogin a été modifier avec succès !"];
                    //Encode du code réponse HTTP
                    http_response_code(200);
                    //Envoie du message erreur encodé en JSON
                    echo json_encode($data);

                }else{
                    //le login n'est pas disponible, on envoie un message d'erreur
                    //Formatage du message d'erreur
                    $data=["erreur" => "Ce Login est indisponible !"];
                    //Encode du code réponse HTTP
                    http_response_code(400);
                    //Envoie du message erreur encodé en JSON
                    echo json_encode($data);
                }

            }catch(EXCEPTION $error){
                //Formatage du message d'erreur
                $data=["erreur" => $error->getMessage()];
                //Encode du code réponse HTTP
                http_response_code(500);
                //Envoie du message erreur encodé en JSON
                echo json_encode($data);
            }



        }else{
            //Format de login (email) invalide
            //Encoder le code de réponse HTTP
            http_response_code(400);

            $error = ["erreur" => "Email as au bon format !"];

            //Encoder les données en json
            $response = json_encode($error);

            //Envoyer les données via un affichae
            echo $response;
        }
    
    }else{
        //Les champs obligatoires sont vides, message d'erreur
        //Encoder le code de réponse HTTP
        http_response_code(400);

        $error = ["erreur" => "Veuillez remplir le champs obligatoires !"];

        //Encoder les données en json
        $response = json_encode($error);

        //Envoyer les données via un affichae
        echo $response;
    }
    

    //Je formate la réponse à envoyé en tableau associatif
    $request = ["message" => "Le nouveau login a été enregistré avec succès !"];
    
    //Encoder le code de réponse HTTP
    http_response_code(200);

    //Encoder les données en json
    $response = json_encode($request);

    //Envoyer les données via un affichae
    echo $response;
    
}
    
?>