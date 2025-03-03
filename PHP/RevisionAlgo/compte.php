<?php
session_start();

function card(){
    $liste="";
    foreach($_SESSION as $tab){
        $liste.="<article style='border-bottom: solide black 2px'>
                <p>Email : {$tab}</p>
                <p>Nom : {$tab}</p>
                <p>Prenom : {$tab}</p>
                <p>Age : {$tab}</p>
            </article>";
    }
    return $liste;
}
if(empty($_SESSION['email']) || empty($_SESSION['nom']) || empty($_SESSION['prenom']) || empty($_SESSION['age'])){
    $list="";
}else{
    print_r($_SESSION['email']);
    $list=card();
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
    <header>
        <nav>
            <a href="index.php">Accueil</a>
            <a href="compte.php">Mon Compte</a>
            <a href="deco.php">Déconexion</a>
        </nav>
    </header>
    <h1>Mon compte</h1>
    <?php echo $list ?>
    
</body>
</html>