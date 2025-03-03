<?php
/*Exercice 15 :
a) Créer une base de données MYSQL avec les informations suivantes :
Nom de la bdd : « articles »,
une table nommée article qui va posséder les champs suivants :
id_article (clé primaire),
nom_article de type varchar(50),
contenu_article de type varchar (255),

b) Créer une page php qui va contenir un formulaire html avec comme méthode POST (balise form)
A l’intérieur du formulaire rajouter les champs suivants :
Un champ input avec comme attribut html name = «nom_article »,
Un champ input avec comme attribut html name = «contenu_article »,
Un champ input de type submit avec comme attribut html value = «Ajouter»

c) Ajouter le code php suivant :
Créer 2 variables $name, $content
Importer le contenu des 2 super globales $_POST[‘nom_article’], $_POST[‘contenu_article’] et tester les avec la méthode isset() dans les variables créés précédemment ($name et $content),
Mettre en place la sécurité
Ajouter le code de connexion à la base de données en vous inspirant des exemples vus dans ce chapitre,
Ajouter une requête préparée qui va insérer le contenu des 2 champs dans un nouvel enregistrement (requête SQL insert),
*/

$name="";
$content="";
$sécuriter="";
// Sécuriter
function sanitize($data){
    return htmlentities(strip_tags(stripslashes(trim($data))));
}
function sécu(){
    if(empty($_POST['nom_article']) || empty($_POST['contenu_article'])){
        return "Veuiller remplire le formulaire";
    }
    $name=sanitize($_POST['nom_article']);
    $content=sanitize($_POST['contenu_article']);

    
    //Connexion BDD
    $bdd= new PDO('mysql:host=localhost;dbname=articles','root','',
    array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

    try{

        $req=$bdd->prepare('INSERT INTO article(nom_article,contenu_article) VALUES(?,?)');
        $req->bindParam(1,$name,PDO::PARAM_STR);
        $req->bindParam(2,$content,PDO::PARAM_STR);

        $req->execute();
        return "L'article  $name a été enregister";

    }catch(EXCEPTION $error){
        return $error->getMessage();
    }
}

if(isset($_POST["Ajouter"])){
    $sécuriter=sécu();
}

/*Exercice 16 :
a) Créer une page php,

b) Ajouter le script php permettant de se connecter à la base de données articles,

c) Ajouter le script php qui va effectuer une requête SQL select préparée permettant de récupérer tous les articles,

d) Formater le résultat de la requête pour quelle l’affiche sous cette forme :
<article>
    <p>numéro de l’article : id de l’article n</p>
    <p>nom de l’article : nom de l’article n</p>
    <p>contenu de l’article : contenu de l’article n</p>
</article>
*/
$liste="";
function coBBD(){
    $bdd= new PDO('mysql:host=localhost;dbname=articles','root','', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    try{
        $req=$bdd->prepare('SELECT * FROM article');

        $req->execute();
        $data=$req->fetchAll();
        return $data;

    }catch(EXCEPTION $error){
        return $error->getMessage();
    }
}

if(isset($_POST['Afficher'])){
    $data=coBBD();
    if(gettype($data)=='string'){
        $liste="<p>$data</p>";
    }else{
        foreach($data as $value){
            $liste = $liste."<article style='border-bottom : 3px solid black'>
                                <p>numéro de l’article : {$value['id_article']}</p>
                                <p>nom de l’article : {$value['nom_article']}</p>
                                <p>contenu de l’article : {$value['contenu_article']}</p>
                            </article>";
            
        }
    }
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
    <form action="bdd.php" method="post">
        <input type="text" name="nom_article" placeholder="Nom de l'article">
        <input type="text" name="contenu_article" placeholder="Contenue de l'article">
        <input type="submit" value="Ajouter" name="Ajouter">
    </form>
    <p><?php echo $sécuriter; ?></p>
    <form action="bdd.php" method="post">
        <input type="submit" value="Afficher" name="Afficher">
    </form>
    <?php echo $liste; ?>
</body>
</html>
