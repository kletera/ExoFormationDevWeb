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
            <a href="/php/Exercice/POO/Projet_Task_POO/">Accueil</a>
            <a href="/php/Exercice/POO/Projet_Task_POO/mestaches" class="<?php echo $header->getClassNav() ?>" >Mes Tâches</a>
            <a href="/php/Exercice/POO/Projet_Task_POO/moncompte" class="<?php echo $header->getClassNav() ?>" >Mon Compte</a>
            <a href="/php/Exercice/POO/Projet_Task_POO/categories" class="<?php echo $header->getClassNav() ?>" >Catégories</a>
            <a href="/php/Exercice/POO/Projet_Task_POO/deconnexion" class="<?php echo $header->getClassNav() ?>" >Déconnexion</a>
        </nav>
    </header>