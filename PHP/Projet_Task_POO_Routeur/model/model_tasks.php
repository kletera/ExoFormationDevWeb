<?php
class ModelTask{
    //Attributs
    private ?int $idTask;
    private ?string $nameTask;
    private ?string $contentTask;
    private ?string $dateTask;
    private ?int $idUser;
    private ?int $idCategory;

    //Constructeur
    public function __construct(?string $nameTask){
        $this->nameTask = $nameTask;
    }

    //GETTER ET SETTER
    public function getIdTask(): ?int { return $this->idTask; }
    public function setIdTask(?int $idTask): self { $this->idTask = $idTask; return $this; }

    public function getNameTask(): ?string { return $this->nameTask; }
    public function setNameTask(?string $nameTask): self { $this->nameTask = $nameTask; return $this; }

    public function getContentTask(): ?string { return $this->contentTask; }
    public function setContentTask(?string $contentTask): self { $this->contentTask = $contentTask; return $this; }

    public function getDateTask(): ?string { return $this->dateTask; }
    public function setDateTask(?string $dateTask): self { $this->dateTask = $dateTask; return $this; }

    public function getIdUser(): ?int { return $this->idUser; }
    public function setIdUser(?int $idUser): self { $this->idUser = $idUser; return $this; }

    public function getIdCategory(): ?int { return $this->idCategory; }
    public function setIdCategory(?int $idCategory): self { $this->idCategory = $idCategory; return $this; }

}
?>