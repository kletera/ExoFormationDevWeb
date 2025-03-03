<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="post">
        <input type="text" name="nom" placeholder="Nom Pokémon">
        <input type="text" name="type" placeholder="Type Pokemon">
        <input type="text" name="force" placeholder="Force">
        <input type="text" name="faiblesse" placeholder="Faiblesse">
        <input type="submit" value="Ajouter" name="Ajouter">
    </form>
    <p><?php echo $messageEnregistrer ?></p>
</body>
</html>