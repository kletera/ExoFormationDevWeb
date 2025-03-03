<?php
declare(strict_types=1);
include "./model/modelPokemon.php";
include "./manager/managerPokemon.php";
class ControllerAccueil{
    // Attributs
    private ModelPokemon $pokemon;
    private ?string $messageEnregistrer;
    private ?string $messageAttaquer;

    // Constructeur
    public function __construct(){
        $this->messageEnregistrer="";
        $this->messageAttaquer="";
    }
    // GETTER
    public function getPokemon():ModelPokemon{
        return $this->pokemon;
    }
    public function getMessageEnregistrer():?string{
        return $this->messageEnregistrer;
    }
    public function getMessageAttaquer():?string{
        return $this->messageAttaquer;
    }
    // SETTER
    public function setPokemon(ModelPokemon $pokemon):self{
        $this->pokemon=$pokemon;
        return $this;
    }
    public function setMessageEnregistrer(?string $messageEnregistrer):self{
        $this->messageEnregistrer=$messageEnregistrer;
        return $this;
    }
    public function setMessageAttaquer(?string $messageAttaquer):self{
        $this->messageAttaquer=$messageAttaquer;
        return $this;
    }
}
?>