<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accueil</title>
    <link rel="stylesheet" href="./style/style.css">
</head>
<body>
    <header>
        <nav>
            <a href="Accueil">Accueil</a>
            <a href="Mes_Taches" class="<?php echo $header->getClassNav() ?>" >Mes Tâches</a>
            <a href="Mon_Compte" class="<?php echo $header->getClassNav() ?>" >Mon Compte</a>
            <a href="Mes_Categories" class="<?php echo $header->getClassNav() ?>" >Catégories</a>
            <a href="Deconnexion" class="<?php echo $header->getClassNav() ?>" >Déconnexion</a>
        </nav>
    </header>