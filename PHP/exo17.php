<?php
/*Exercice 17 : Projet Task
a) A partir du script SQL donnée, créer la BDD task, et les tables qui lui appartiennent

b) Créer une page php qui va contenir un formulaire html avec comme méthode POST (balise form) cette page va nous permettre de créer nos comptes utilisateurs et les sauvegarder dans la base de données.

A l’intérieur du formulaire ajouter les champs suivants :
Un champ input avec comme attribut html name = «name_user»,
Un champ input avec comme attribut html name = «first_name_user»,
Un champ input avec comme attribut html name = «login_user»,
Un champ input avec comme attribut html name = «mdp_user»,
Un champ input de type submit avec comme attribut html value = « Ajouter »

c) Ajouter le code php qui va, à l'aide de différentes fonctions, tester l'envoie du formulaire, tester les champs requis (la sécurité) et hasher le mot de passe, et envoyer les données en BDD pour enregistrement de l'utilisateur (utiliser une requête préparée).

-Afficher après l’insertion en base de données les informations que vous avez saisies (nom, prenom, login,).

d) Bonus :
-Afficher en bas de la page la liste des comptes utilisateurs créés avec une requête SQL select,
-Utiliser une requête SQL préparée.

*/
// Déclaration de variable
$sécuriter="";
$name="";
$fn="";
$log="";
$mdp="";
$liste="";

function sanitize($data){
    return htmlentities(strip_tags(stripslashes(trim($data))));
}
function envoie(){
    // Mise en place de la sécuriter du formulaire
    if(empty($_POST["name_user"]) || empty($_POST["first_name_user"]) || empty($_POST["login_user"]) || empty($_POST["mdp_user"])){
        return "Veuiller remplire le formulaire";
    }
    // Netiyage des donnée
    $name=sanitize($_POST["name_user"]);
    $fn=sanitize($_POST["first_name_user"]);
    $log=sanitize($_POST["login_user"]);
    $mdp=sanitize($_POST["mdp_user"]);

    $mdp= password_hash($mdp,PASSWORD_BCRYPT);

    // Mise en place de l'envoi des donner dans la BDD
    $bdd= new PDO('mysql:host=localhost;dbname=task','root','',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

    try{
        $req=$bdd->prepare('INSERT INTO users(name_user,first_name_user,login_user,mdp_user) VALUES(?,?,?,?)');
        $req->bindParam(1,$name,PDO::PARAM_STR);
        $req->bindParam(2,$fn,PDO::PARAM_STR);
        $req->bindParam(3,$log,PDO::PARAM_STR);
        $req->bindParam(4,$mdp,PDO::PARAM_STR);

        $req->execute();
        return "<p>Nouveaux Utilisateur enregistrer</p>
                <p>Bienvenue $name $fn allias $log</p>";

    }catch(EXCEPTION $err){
        return $err->getMessage();
    }
}

function liste(){
    $bdd= new PDO('mysql:host=localhost;dbname=task','root','',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

    try{
        $req=$bdd->prepare('SELECT name_user,first_name_user,login_user FROM users');

        $req->execute();
        $data=$req->fetchAll();
        return $data;

    }catch(EXCEPTION $err){
        return $err->getMessage();
    }

}


// test envoie formulaire
if(isset($_POST["Ajouter"])){
    $sécuriter=envoie();
}

$data=liste();
if(gettype($data)=='string'){
    return $liste="<p>$data</p>";
}else{
    foreach($data as $values){
        $liste= $liste."<article style='border-bottom : 3px solid black'>
        <p>Nom : {$values['first_name_user']}</p>
        <p>Prénom : {$values['name_user']}</p>
        <p>Alias : {$values['login_user']}</p>
        </article>";
    }
}


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Compte</h1>
    <form action="" method="post">
        <input type="text" name="name_user" placeholder="Name">
        <input type="text" name="first_name_user" placeholder="First Name">
        <input type="text" name="login_user" placeholder="Login">
        <input type="text" name="mdp_user" placeholder="Password">
        <input type="submit" value="Ajouter " name="Ajouter" >
    </form>
    <?php echo  $sécuriter ?>
    <h2>Liste des compte Utilisateur</h2>
    <?php echo $liste ?>
</body>
</html>