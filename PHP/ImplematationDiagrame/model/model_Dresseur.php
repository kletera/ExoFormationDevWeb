<?php
class Dresseur{
    // Attributs
    private ?string $nom;
    private Pokemon $pokemon;
    // Constructeur
    public function __construct(?string $nom,Pokemon $pokemon){
        $this->nom=$nom;
        $this->pokemon=$pokemon;
    }
    // GETTER
    public function getNom():?string{
        return $this->nom;
    }
    public function getPokemon():Pokemon{
        return $this->pokemon;
    }
    // SETTER
    public function setNom(?string $nom):self{
        $this->nom=$nom;
        return $this;
    }
    public function setPokemon(Pokemon $pokemon):self{
        $this->pokemon=$pokemon;
        return $this;
    }

}

?>