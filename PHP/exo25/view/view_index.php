<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Ajout d'Articles</h1>
    <form action="" method="post">
        <input type="text" name="nom_article" placeholder="nom de l'article">
        <input type="text" name="contenu_article" placeholder="contenu de l'article">
        <input type="submit" name="submit">
    </form>
    <p><?php echo $message ?></p>

    <section>
        <h1>Liste des Articles</h1>
        <?php echo $listArticle ?>
    </section>
</body>
</html>