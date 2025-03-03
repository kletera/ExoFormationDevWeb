<?php
class ModelCategory{
    //Attributs
    private ?int $idCategory;
    private ?string $nameCategory;

    //Constructeur
    public function __construct(?string $nameCategory){
        $this->nameCategory = $nameCategory;
    }

    //GETTER ET SETTER
    public function getIdCategory(): ?int { 
        return $this->idCategory; 
    }
    public function setIdCategory(?int $idCategory): self { 
        $this->idCategory = $idCategory;
        return $this;
    }

    public function getNameCategory(): ?string { 
        return $this->nameCategory; 
    }
    public function setNameCategory(?string $nameCategory): self { 
        $this->nameCategory = $nameCategory; return $this; 
    }

}
?>