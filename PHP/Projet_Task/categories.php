<?php
//J'inclus mes ressources (fichier utilitaire et model)
include './utils/functions.php';
include './model/model_categories.php';

//Déclaration des variables d'affichages
$message = "";
$listeCategories = "";

//Fonction qui teste le formulaire d'ajout de catégorie
//Param : void
//Return : array
function formTestCategory(){
    //1) Vérifier le champ vide :
    if(empty($_POST['name_category'])){
        return ["name_category" => '', 'erreur' => 'Veuillez remplir le nom de la Catégorie !'];
    };

    //2) Nettoyage des données
    $name_category = sanitize($_POST['name_category']);

    //3) Retourner les données
    return ["name_category" => $name_category, 'erreur' => ''];
}

//Fonction pour mettre en forme l'affichage d'une catégorie
//Param : array['id_category'=>INT, 'name_category'=>string]
//Return : string
function liCategories($category){
    return "<li> {$category['name_category']} </li>";
}

//Ajout d'une Catégoire en BDD
//Je vérifie que je reçois le formulaire d'ajout
if(isset($_POST['ajouterCat'])){
    //je teste le formulaire
    $tab = formTestCategory();

    //je vérifie si je suis dans le cas d'erreur
    if($tab['erreur'] != ''){
        $message = $tab['erreur'];
    }else{
        //Sinon je vérifie si la catégorie existe déjà en BDD
        $data = readCategoryByName($tab['name_category']);

        //Je vérifie si tout s'est bien passé (pas d'erreur de communication avec la BDD)
        if(gettype($data) == 'string'){
            $message = 'Une erreur est survenue. La Base de donnée est injoignable. Réessayer ultérieurement.';
        }else if(!empty($data)){
            //Si elle existe, j'affiche un message d'erreur
            $message = "{$tab['name_category']} existe déjà !";
        }else{
            //Sinon j'effectue l'ajout et j'affiche un message de confirmation
            $message = addCategory($tab['name_category']);
        }
        
    }
}

//Affichage de la liste des Catégories
//je récupère la liste des catégories
$data = readCategories();
//Je vérifie si tout s'est bien passé (pas d'erreur de communication avec la BDD)
if(gettype($data) == 'string'){
    $listeCategories = 'Une erreur est survenue. La Base de donnée est injoignable. Réessayer ultérieurement.';
}else{
    //Sinon j'affiche la liste des categories
    foreach($data as $category){
        $listeCategories = $listeCategories.liCategories($category);
    }
}

//J'inclus mes views
include './view/view_header.php';
include './view/view_categorie.php';
include './view/view_footer.php';
?>