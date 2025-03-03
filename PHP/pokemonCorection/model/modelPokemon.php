<?php
class ModelPokemon{
    //Attribut
    private ?int $id;
    private ?string $nom;
    private ?string $type;
    private ?string $force;
    private ?string $faiblesse;

    //Constructeur
    // public function __construct(){

    // }

    //GETTER et SETTER
    public function getId(): ?int { return $this->id; }
    public function setId(?int $id): self { $this->id = $id; return $this; }

    public function getNom(): ?string { return $this->nom; }
    public function setNom(?string $nom): self { $this->nom = $nom; return $this; }

    public function getType(): ?string { return $this->type; }
    public function setType(?string $type): self { $this->type = $type; return $this; }

    public function getForce(): ?string { return $this->force; }
    public function setForce(?string $force): self { $this->force = $force; return $this; }

    public function getFaiblesse(): ?string { return $this->faiblesse; }
    public function setFaiblesse(?string $faiblesse): self { $this->faiblesse = $faiblesse; return $this; }
}