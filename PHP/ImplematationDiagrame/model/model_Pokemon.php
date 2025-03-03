<?php
class Pokemon{
    // Attributs
    private ?string $nom;
    private ?int $puissance;

    // Constructeur
    public function __construct(?string $nom, ?int $puissance){
        $this->nom=$nom;
        $this->puissance=$puissance;
    }
    // GETTER
    public function getNom():?string{
        return $this->nom;
    }
    public function getPuissance():?int{
        return $this->puissance;
    }
    // SETTER
    public function setNom(?string $nom):self{
        $this->nom=$nom;
        return $this;
    }
    public function setPuissance(?int $puissance):self{
        $this->puissance=$puissance;
        return $this;
    }
    // Methodes
    function attaquer(?string $cible):int{
        $nom=$this->getNom();
        $puissance=$this->getPuissance();

        echo "$nom attaque $cible";
        return $puissance;
    }
}

?>