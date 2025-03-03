<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello</h1>
    <?php 
    /*BLOC DE COMMENTAIRE : C'est dans ces balise <?php ?> que vous écrivez du code PHP */ 
    //Ligne de Commentaire 
    //Afichon Hello world avec php
    echo('Hello World');
    echo 11;
    echo true;
    echo "<h2>Je suis un titre</h2>";

    // 2 fonctions pour afficher un tableau
    var_dump([1,2,3]); // -> nous donne beaucoup de détail sur le tableau affiché

    print_r([1,2,3]); // -> affiche le tableau de matière plus épurer

    /*
        LES VARIABLES
    */
    // Déclarer une variable : on utilise le symbole $ suivi du nom de la variable
    $nomDeLaVariable;

    // Assignier une variable
    $maVariable = "Bonjour le Monde";

    echo $nomDeLaVariable;
    echo "<br></br>";
    echo $maVariable;
    echo "<br></br>";

    // Récuoperer le type de la variable  : fonction gettype()
    echo "Ma variable est ";
    echo (gettype($maVariable));
    echo "<br></br>";
    echo "nom de ma variable est ";
    echo(gettype($nomDeLaVariable));

?>

</body>
</html>

