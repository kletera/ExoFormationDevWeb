<?php
class Sasha extends Dresseur{
    // Methodes
    function lancerPokemon():void{
        echo"{$this->getPokemon()->getNom()} à toi !";
    }
    function attaquerDresseur(?string $cible):void{
        $this->getPokemon()->attaquer($cible);

    }
}

?>