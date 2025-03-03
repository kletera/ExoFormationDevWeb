<?php
/*
Dans un nouveau fichier index.php

1) Créer du html avec un formulaire utilisateur (email, nom, prenom, age)

2) Le but du formulaire, c'est de récupérer les données. De les conserver en Session dans un tableau
Cela signifie que l'on peut soumettre plusieurs fois le formulaire, ça ajoutera un utilisateur au tableau au sein de la Session

3) Sur une autre page (un autre fichier comptes.php), s'il y a un utilisateur dans le tableau en Session, on effiche chaque utilisateur au sein d'une card <article>

4) Créer un lien dans le menu qui videra (détruira) la Session

PS : n'oubliez pas le menu de navigation entre les 2 pages 
*/

session_start();

$message="";

function sanitize($data){
    return htmlentities(strip_tags(stripslashes(trim($data))));
}

function inscription(){
    if(empty($_POST['email']) || empty($_POST['nom']) || empty($_POST['prenom']) || empty($_POST['age'])){
        return 'Veullier remplire tous le formulaire';
    }
    $email=sanitize($_POST['email']);
    $nom=sanitize($_POST['nom']);
    $prenom=sanitize($_POST['prenom']);
    $age=sanitize($_POST['age']);
    
    if(!filter_var($email,FILTER_VALIDATE_EMAIL)){
        return "L'email pas au bon format !";
    }
    
    
}

if(isset($_POST['Ajouter'])){
    $tab=inscription();
    if($tab['erreur'] != ''){
        $message = $tab['erreur'];
    }else{
        $_SESSION['utilisateur'][]=$user;
        
        
        $message = "{$_POST['nom']} - {$_POST['prenom']} est enregistrer avec succés !";
    }
}
print_r($_SESSION);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <nav>
            <a href="index.php">Accueil</a>
            <a href="compte.php">Mon Compte</a>
            <a href="deco.php">Déconexion</a>
        </nav>
    </header>
    <form action="" method="post">
        <input type="email" name="email" placeholder="Email">
        <input type="text" name="nom" placeholder="Nom">
        <input type="text" name="prenom" placeholder="Prenom">
        <input type="number" name="age" placeholder="Age">
        <input type="submit" value="S'inscrire" name="Ajouter">
    </form>
    <p><?php echo $message ?></p>
</body>
</html>