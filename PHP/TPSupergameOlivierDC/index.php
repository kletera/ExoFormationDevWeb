<?php
//CONTROLER DE LA PAGE D'ACCUEIL
declare (strict_types=1);

include './model/model_joueurs.php';
include './utils/function.php';

$message = "";
$list = "";
function formJoueur(){
    if(empty($_POST["pseudo"]) || empty($_POST["email"]) || empty($_POST["score"])){
        return ["pseudo" => '',"email" => '',"score" => "", 'erreur' => 'Veuillez remplir le formulaire !'];
    }
    $pseudo=sanitize($_POST["pseudo"]);
    $email=sanitize($_POST["email"]);
    $score=sanitize($_POST["score"]);

    if(!filter_var($email,FILTER_VALIDATE_EMAIL)){
        return ["pseudo" => '',"email" => '',"score" => "","erreur"=>"L'email pas au bon format !"];

    }
    return ["pseudo" => $pseudo,"email" => $email,"score" => $score,"erreur"=>''];
    
}
function cardUser($profil){
    return "<section style='border-bottom : 3px solid black'>
        <h2>Score : {$profil['score']}</h2>
        <p>Pseudo - Email : {$profil['pseudo']} - {$profil['email']}</p>
    </section>";
}


if(isset($_POST["Ajouter"])){
    $tab = formJoueur();
    if($tab['erreur'] != ''){
        $message = $tab['erreur'];
    }else{
        $joueur = new ModelJoueurs($tab['pseudo']);
        
        $joueur->setPseudo($tab['pseudo'])->setEmail($tab['email'])->setScore($tab['score']);

        if(empty($joueur->getJoueurByPseudo())){
            $message = $joueur->addJoueur();

        }else{
            $message="Ce compte existe déjà en BDD !";
        }
    }
}

$new=new ModelJoueurs(null);
$users = $new->getJoueurs();

foreach($users as $user){
    $list = $list.cardUser($user);
}


    include './view/header.php';
    include './view/view_accueil.php';
    include './view/footer.php';

?>