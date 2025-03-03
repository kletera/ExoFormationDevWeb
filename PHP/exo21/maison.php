<?php
class Maison{
    //Attributs
    private ?string $nom;
    private ?float $longueur;
    private ?float $largeur;
    private ?int $nbrEtage;

    //Constructeur
    public function __construct(?string $nom){
        $this->nom = $nom;
    }

    //GETTER et SETTER
    public function getNom():?string{
        return $this->nom;
    }
    public function getLongueur():?float{
        return $this->longueur;
    }
    public function getLargeur():?float{
        return $this->largeur;
    }
    public function getNbrEtage():?int{
        return $this->nbrEtage;
    }

    public function setNom(?string $nom):Maison{
        $this->nom = $nom;
        return $this;
    }
    public function setLongueur(?float $longueur):Maison{
        $this->longueur = $longueur;
        return $this;
    }
    public function setLargeur(?float $largeur):Maison{
        $this->largeur = $largeur;
        return $this;
    }
    public function setNbrEtage(?int $nbrEtage):Maison{
        $this->nbrEtage = $nbrEtage;
        return $this;
    }

    //Méthode
    public function surface():?float{
        $surface = $this->getLongueur() * $this->getLargeur() * ($this->getNbrEtage() + 1);
        echo "<p>la surface de {$this->getNom()} est égale à : {$surface} m2</p>";
        return $surface;
    }
}

?>