<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Accueil</h1>
    <h2>Inscription</h2>
    <form action="exo3.php" method="POST">
        <input type="number" name="valeur1" id="" placeholder="Iserer une valeur">
        <input type="number" name="valeur2" id="" placeholder="Iserer une autre valeur">
        <input type="submit" value="submit">
    </form>
    <?php
        if(isset($_POST["valeur1"]) AND isset($_POST["valeur2"])){
            echo "<p>La somme est égale à : ".$_POST["valeur1"]+$_POST["valeur2"]."</p>";
        }else{
            echo "<p>Veuiller inserer des valeur dans <bold>2</bold> input</p>";
        }
    ?>
</body>
</html>
