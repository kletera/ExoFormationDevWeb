<?php

class ControlerCategory{
    //Attribut
    private ?string $message;
    private ?string $listeCategories;

    //Constructeur
    public function __construct(){
        //Déclaration des variables d'affichages
        $this->message = "";
        $this->listeCategories = ""; 
    }

    //GETTER ET SETTER
    public function getMessage(): ?string { return $this->message; }
    public function setMessage(?string $message): self { $this->message = $message; return $this; }

    public function getListeCategories(): ?string { return $this->listeCategories; }
    public function setListeCategories(?string $listeCategories): self { $this->listeCategories = $listeCategories; return $this; }

    //METHODE
    //Fonction qui teste le formulaire d'ajout de catégorie
    //Param : void
    //Return : array
    public function formTestCategory():array{
        //1) Vérifier le champ vide :
        if(empty($_POST['name_category'])){
            return ["name_category" => '', 'erreur' => 'Veuillez remplir le nom de la Catégorie !'];
        };

        //2) Nettoyage des données
        $name_category = sanitize($_POST['name_category']);

        //3) Retourner les données
        return ["name_category" => $name_category, 'erreur' => ''];
    }

    //Fonction pour mettre en forme l'affichage d'une catégorie
    //Param : array['id_category'=>INT, 'name_category'=>string]
    //Return : string
    public function liCategories($category):string{
        return "<li> {$category['name_category']} </li>";
    }

    //Fonction pour enregister une catégorie en BDD
    public function registerCategory():void{
        //Ajout d'une Catégoire en BDD
        //Je vérifie que je reçois le formulaire d'ajout
        if(isset($_POST['ajouterCat'])){
            //je teste le formulaire
            $tab = $this->formTestCategory();

            //je vérifie si je suis dans le cas d'erreur
            if($tab['erreur'] != ''){
                $this->setMessage($tab['erreur']);
            }else{
                //Création de mon objet $category à partir de ManagerCategory
                $category = new ManagerCategory($tab['name_category']);

                //Sinon je vérifie si la catégorie existe déjà en BDD
                $data = $category->readCategoryByName();

                //Je vérifie si tout s'est bien passé (pas d'erreur de communication avec la BDD)
                if(gettype($data) == 'string'){
                    $this->setMessage('Une erreur est survenue. La Base de donnée est injoignable. Réessayer ultérieurement.');
                }else if(!empty($data)){
                    //Si elle existe, j'affiche un message d'erreur
                    $this->setMessage("{$tab['name_category']} existe déjà !");
                }else{
                    //Sinon j'effectue l'ajout et j'affiche un message de confirmation
                    $this->setMessage($category->addCategory());
                }
                
            }
        }
    }

    //Fonction pur afficher la liste des catégorie
    public function displayCategory():void{
        //Affichage de la liste des Catégories
        //Création de mon objet $category à partir de ManagerCategory
        $category = new ManagerCategory(null);

        //je récupère la liste des catégories
        $data = $category->readCategories();
        //Je vérifie si tout s'est bien passé (pas d'erreur de communication avec la BDD)
        if(gettype($data) == 'string'){
            $this->setListeCategories('Une erreur est survenue. La Base de donnée est injoignable. Réessayer ultérieurement.');
        }else{
            //Sinon j'affiche la liste des categories
            foreach($data as $category){
                $this->setListeCategories($this->getListeCategories().$this->liCategories($category));
            }
        } 
    }
}

?>