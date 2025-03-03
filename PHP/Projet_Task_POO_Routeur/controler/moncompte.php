<?php

class ControlerCompte{
    //Attributs
    private ?string $login;
    private ?string $nom;
    private ?string $prenom;

    //Constructeur
    public function __construct(){
        //Déclaration des variables d'affichage
        $this->login = "";
        $this->nom = "";
        $this->prenom = "";
    }

    //GETTER ET SETTER
    public function getLogin(): ?string { return $this->login; }
    public function setLogin(?string $login): self { $this->login = $login; return $this; }

    public function getNom(): ?string { return $this->nom; }
    public function setNom(?string $nom): self { $this->nom = $nom; return $this; }

    public function getPrenom(): ?string { return $this->prenom; }
    public function setPrenom(?string $prenom): self { $this->prenom = $prenom; return $this; }

    //METHOD
    public function displayUserAccount(){
        //AFFICHER LES DONNES DE L'UTILISATEURS  ENREGISTREES EN SESSION
        //1er Etape : je teste si j'ai bien des SESSIONS d'enregistré
        if(isset($_SESSION['id_user'])){
            //2nd Etape : je transmets les données de SESSIONS à mes variables d'affichages
            $this->setLogin($_SESSION['login_user']);
            $this->setNom($_SESSION['name_user']);
            $this->setPrenom($_SESSION['first_name_user']);
        }
    }
}

?>