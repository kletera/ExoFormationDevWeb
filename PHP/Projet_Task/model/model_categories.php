<?php
//Fonction pour enregister une catégorie en BDD
//Param : string
//Return : string
function addCategory($name_category){
    //1) Création de l'objet de connexion PDO
    $bdd = new PDO('mysql:host=localhost;dbname=task5','root','root',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

    //try...catch
    try{
        //2) Préparation de la requête
        $req = $bdd->prepare('INSERT INTO categories (name_category) VALUES (?)');

        //3) Binding de Paramètre
        $req->bindParam(1,$name_category,PDO::PARAM_STR);

        //4) Execution de la requête
        $req->execute();

        //5) Retourner un message de confirmation
        return "$name_category a été ajouté avec succès !";
        
    }catch(EXCEPTION $error){
        return $error->getMessage();
    }
}

//Fonction pour récupérer l'ensemble des catégories
//Param : void
//Return : array | string
function readCategories(){
    //1) Création de l'objet de connexion PDO
    $bdd = new PDO('mysql:host=localhost;dbname=task5','root','root',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

    //try...catch
    try{
        //2) Préparation de la requête
        $req = $bdd->prepare('SELECT id_category, name_category FROM categories');

        //3) Execution de la requête
        $req->execute();

        //4) Récupération et renvoie de la réponse de la BDD
        return $req->fetchAll(PDO::FETCH_ASSOC);
    }catch(EXCEPTION $error){
        return $error->getMessage();
    }
}

//Fonction pour récupérer une catégorie par son nom
//Param : string
//Return : array | string
function readCategoryByName($name_categorie){
    //1) Création de l'objet de connexion PDO
    $bdd = new PDO('mysql:host=localhost;dbname=task5','root','root',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

    //try...catch
    try{
        //2) Préparation de la requête
        $req = $bdd->prepare('SELECT id_category, name_category FROM categories WHERE name_category = ?');

        //3) Binding de Paramètre
        $req->bindParam(1,$name_categorie,PDO::PARAM_STR);

        //4) Execution de la requête
        $req->execute();

        //5) Récupération et renvoie de la réponse de la BDD
        return $req->fetchAll(PDO::FETCH_ASSOC);
    }catch(EXCEPTION $error){
        return $error->getMessage();
    }
}
?>