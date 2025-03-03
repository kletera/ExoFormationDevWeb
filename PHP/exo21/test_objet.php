<?php
    //Je déclare le mode strict
    declare(strict_types=1);

    include './maison.php';

    //J'instancie une nouvelle maison avec un nom
    $maison = new Maison('La Pension des Mimosas');

    //Maintenant je dois lui passer une longueur, une largeur et un nombre d'étage. Je vais utiliser les Setter de mon objet
    $maison->setLongueur(25)->setLargeur(15)->setNbrEtage(2);

    //J'affiche le calcul de la surface comme attendu
    $maison->surface();
?>
p