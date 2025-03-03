<?php
class ModelUser{
    //Attribut
    private ?int $idUser;
    private ?string $nameUser;
    private ?string $firstNameUser;
    private ?string $loginUser;
    private ?string $mdpUser;

    //Constructeur
    public function __construct(?string $login){
        $this->loginUser = $login;
    }

    //GETTER ET SETTER
    public function getIdUser(): ?int{
        return $this->idUser;
    }
    public function getNameUser(): ?string{
        return $this->nameUser;
    }
    public function getFirstNameUser(): ?string{
        return $this->firstNameUser;
    }
    public function getLoginUser(): ?string{
        return $this->loginUser;
    }
    public function getMdpUser(): ?string{
        return $this->mdpUser;
    }
    public function setIdUser(?int $idUser): ModelUser{
        $this->idUser= $idUser;
        return $this;
    }
    public function setNameUser(?string $nameUser): ModelUser{
        $this->nameUser = $nameUser;
        return $this;
    }
    public function setFirstNameUser(?string $firstNameUser): ModelUser{
        $this->firstNameUser = $firstNameUser;
        return $this;
    }
    public function setLoginUser(?string $loginUser): ModelUser{
        $this->loginUser = $loginUser;
        return $this;
    }
    public function setMdpUser(?string $mdpUser): ModelUser{
        $this->mdpUser = $mdpUser;
        return $this;
    }
}
?>