<?php
class ManagerPokemon extends ModelPokemon{
    // Methode
    public function attaque(?string $cible):int{
        $dg=5;
        return $dg; 
    }
    
    public function addPokemon():string{
        $bdd= new PDO('mysql:host=localhost;dbname=pokemon','root','',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

        $nom=$this->getNom();
        $type=$this->getType();
        $force=$this->getForce();
        $faiblesse=$this->getFaiblesse();

        try{
            $req=$bdd->prepare('INSERT INTO pokemon(nom,typePoke,forcePoke,faiblessePoke) VALUE (?,?,?,?)');

            $req->bindParam(1,$nom,PDO::PARAM_STR);
            $req->bindParam(1,$type,PDO::PARAM_STR);
            $req->bindParam(1,$force,PDO::PARAM_STR);
            $req->bindParam(1,$faiblesse,PDO::PARAM_STR);

            $req->execute();

            return "Le pokémon $nom a été enregister";

        }catch(EXCEPTION $error){
            return $error->getMessage();
        }

    }
    public function readPokemon():array|string{
        $bdd= new PDO('mysql:host=localhost;dbname=pokemon','root','',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

        try{
            $req=$bdd->prepare('SELECT nom,typePoke,forcePoke,faiblessePoke FROM pokemon');

            $req->execute();

            return $req->fetchAll(PDO::FETCH_ASSOC);

        }catch(EXCEPTION $error){
            return $error->getMessage();
        }
    }

    public function readPokemonByName():array|string{
        $bdd= new PDO('mysql:host=localhost;dbname=pokemon','root','',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
        
        $nom=$this->getNom();

        try{
            $req=$bdd->prepare('SELECT nom,typePoke,forcePoke,faiblessePoke FROM pokemon WHERE nom=?');

            $req->bindParam(1,$nom,PDO::PARAM_STR);

            $req->execute();

            return $req->fetchAll(PDO::FETCH_ASSOC);

        }catch(EXCEPTION $error){
            return $error->getMessage();
        }
    }
    
}
?>