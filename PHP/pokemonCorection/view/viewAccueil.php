<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>POKEMON !</h1>
    <form action="" method="post">
        <input type="text" name="nom" placeholder="Nom">
        <input type="text" name="type" placeholder="Type">
        <input type="text" name="force" placeholder="Force">
        <input type="text" name="faiblesse" placeholder="Faiblesse">
        <input type="submit" name="enregistrer">
    </form>
    <p><?php echo $accueil->getMessageEnregistrer() ?></p>
    <p><?php echo $accueil->getMessageAttaquer() ?></p>
</body>
</html>