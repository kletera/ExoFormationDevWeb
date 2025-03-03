<?php
class ManagerPokemon extends ModelPokemon{
    //Methode
    public function attaquer(?string $cible):int{
        return random_int(10,100);
    }

    public function addPokemon():string{
        //Se Connecter à la BDD
        $bdd= new PDO('mysql:host=localhost;dbname=pokemon','root','',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

        //Récupérer les attributs à enregistrer depuis l'objet $this
        $nom = $this->getNom();
        $type = $this->getType();
        $force = $this->getForce();
        $faiblesse = $this->getFaiblesse();

        //Try Catch
        try{
            //Preparer la requete
            $req=$bdd->prepare('INSERT INTO pokemon(nom,typePoke,forcePoke,faiblessePoke) VALUE (?,?,?,?)');

            //Binding de Param
            $req->bindParam(1,$nom,PDO::PARAM_STR);
            $req->bindParam(2,$type,PDO::PARAM_STR);
            $req->bindParam(3,$force,PDO::PARAM_STR);
            $req->bindParam(4,$faiblesse,PDO::PARAM_STR);

            //Execution de la requête
            $req->execute();

            //Message de confirmation
            return "$nom a été enregistré !";

        }catch(EXCEPTION $error){
            return $error->getMEssage();
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