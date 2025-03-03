<?php
include './model/modelPokemon.php';
include './manager/managerPokemon.php';

class ControllerAccueil{
    //Attributs
    private ?ModelPokemon $pokemon;
    private ?string $messageEnregistrer;
    private ?string $messageAttaquer;

    //Constructeur
    public function __construct(){
        $this->messageEnregistrer = "";
        $this->messageAttaquer = "";
    }

    //Getter et Setter
    public function getPokemon(): ?ModelPokemon { return $this->pokemon; }
    public function setPokemon(?ModelPokemon $pokemon): self { $this->pokemon = $pokemon; return $this; }

    public function getMessageEnregistrer(): ?string { return $this->messageEnregistrer; }
    public function setMessageEnregistrer(?string $messageEnregistrer): self { $this->messageEnregistrer = $messageEnregistrer; return $this; }

    public function getMessageAttaquer(): ?string { return $this->messageAttaquer; }
    public function setMessageAttaquer(?string $messageAttaquer): self { $this->messageAttaquer = $messageAttaquer; return $this; }

    //Methode
    public function enregistrerPokemon():string{
        //vérifier que l'on reçoit le formulaire
        if(isset($_POST['enregistrer'])){
            //1) Vérifier les champs vides
            if(empty($_POST['nom']) || empty($_POST['type']) || empty($_POST['force']) ||empty($_POST['faiblesse']) ){
                return "Veuillez remplir les champs !";
            }

            //2) Vérifier le format -> ici pas besoin, on a que des string

            //3) nettoyage des données
            $nom = htmlentities(strip_tags(stripslashes(trim($_POST['nom']))));
            $type = htmlentities(strip_tags(stripslashes(trim($_POST['type']))));
            $force = htmlentities(strip_tags(stripslashes(trim($_POST['force']))));
            $faiblesse = htmlentities(strip_tags(stripslashes(trim($_POST['faiblesse']))));

            //4) Instancier un manager pokemon
            $this->setPokemon(new ManagerPokemon());

            //5) J'enregistre mes données dans mon pokemon
            $this->getPokemon()->setNom($nom)->setType($type)->setForce($force)->setFaiblesse($faiblesse);

            //6) Demander à mon objet pokemon de s'enregistrer
            $message = $this->getPokemon()->addPokemon();

            //7) Je retourne le message à afficher
            return $message;
        }
        return '';
    }

    public function attaquePokemon(?string $cible):string{
        $degat = $this->getPokemon()->attaquer($cible);
        $nom = $this->getPokemon()->getNom();
        return "$nom fait $degat points de dégât à $cible";
    }
    public function liste(){
        
    }
}


//Instancier mon Controller
$accueil = new ControllerAccueil();

//J'appelle l'enregistrement d'un pokemon
$message = $accueil->enregistrerPokemon();

//Je conserve le message dans mon controller
$accueil->setMessageEnregistrer($message);

//TEST de la méthode attaquePokemon()
//1) instancier un pokemon dans mon controller
$accueil->setPokemon(new ManagerPokemon());
//2) je donne des infos à mon pokemon
$accueil->getPokemon()->setNom("Salamèche")->setType("feu")->setForce("plante")->setFaiblesse("eau");
//3) je fais attaquer mon pokemon
$message = $accueil->attaquePokemon("Tortank");
//4) Je passe le message à la vue
$accueil->setMessageAttaquer($message);


include './view/viewAccueil.php';
?>