<?php
//MODEL POUR LA TABLE JOUEURS
class ModelJoueurs{
    // Attributs
    private ?int $id;
    private ?string $pseudo;
    private ?string $email;
    private ?int $score;
    private PDO $bdd;
    // Constructeur
    public function __construct(?string $pseudo){
        $this->pseudo=$pseudo;
        $this->email="";
        $this->score=null;
        $this->bdd=new PDO('mysql:host=localhost;dbname=supergame','root','',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
    }
    // GETTER
    public function getId():?int{
        return $this->id;
    }
    public function getPseudo():?string{
        return $this->pseudo;
    }
    public function getEmail():?string{
        return $this->email;
    }
    public function getScore():?int{
        return $this->score;
    }
    public function getBdd():PDO{
        return $this->bdd;
    }
    // SETTER
    public function setId(?int $id):self{
        $this->id=$id;
        return $this;
    }
    public function setPseudo(?string $pseudo):self{
        $this->pseudo=$pseudo;
        return $this;
    }
    public function setEmail(?string $email):self{
        $this->email=$email;
        return $this;
    }
    public function setScore(?int $score):self{
        $this->score=$score;
        return $this;
    }
    public function setBdd(PDO $bdd):self{
        $this->bdd=$bdd;
        return $this;
    }
    // Methodes
    public function addJoueur():string{
        $bdd = $this->bdd;

        $pseudo=$this->getPseudo();
        $email=$this->getEmail();
        $score=$this->getScore();

        try{
            $req = $bdd->prepare('INSERT INTO joueurs(pseudo, email, score) VALUES (?,?,?)');

            $req->bindParam(1,$pseudo,PDO::PARAM_STR);
            $req->bindParam(2,$email,PDO::PARAM_STR);
            $req->bindParam(3,$score,PDO::PARAM_INT);

            $req->execute();

            return "$pseudo a été enregistré avec succès !";
        }catch(EXCEPTION $error){
            return $error->getMessage();
        }
        
    }
    public function getJoueurs():array|string{
        $bdd = $this->bdd;

        try{
            $req=$bdd->prepare('SELECT id,pseudo,email,score FROM joueurs');

            $req->execute();

            $data=$req->fetchAll(PDO::FETCH_ASSOC);

            return $data;

        }catch(EXCEPTION $error){
            return $error->getMessage();
        }
    }
    public function getJoueurByPseudo():array|string{
        $bdd = $this->bdd;

        $pseudo=$this->getPseudo();

        try{
            $req=$bdd->prepare('SELECT pseudo,email,score FROM joueurs WHERE pseudo=?');

            $req->bindParam(1,$pseudo,PDO::PARAM_STR);

            $req->execute();

            $data = $req->fetchAll(PDO::FETCH_ASSOC);

            return $data;

        }catch(EXCEPTION $error){
            return $error->getMessage();
        }
    }
}
?>