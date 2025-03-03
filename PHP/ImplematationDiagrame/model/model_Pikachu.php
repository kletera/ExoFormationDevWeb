<?php
class Pikachu extends Pokemon{
    // Methodes
    function attaqueEclair(?string $cible):void{
        $dg=$this->attaquer($cible);
        
        echo "{$this->getNom()} lance Attaque Eclair";
        echo "Cette attaque fait $dg point de dégat";
    }
    function action(?string $cible):void{
        $this->attaqueEclair($cible);
    }
}

?>