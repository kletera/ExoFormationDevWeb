<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        /*Exercice 10 :
        1) Créer un script qui affiche les nombres de 1 -> 5 (méthode echo).
        2) Ecrire une fonction qui prend un nombre en paramètre (variable $nbr), et qui ensuite affiche les dix nombres suivants. Par exemple, si la valeur de nbr équivaut à : 17, la fonction affichera les nombres de 18 à 27 (méthode echo).
        */
        for($i=1;$i<6;$i++){
            echo "<p>$i</p>";
        }
        function nombre($nbr){
            for($i=0;$i<10;$i++){
                $nbr++;
                echo"<p>$nbr</p>";
            }
        }
        nombre(17);

        /*Exercice 11 :
        1) Créer une fonction qui affiche la valeur la plus grande du tableau.
        2) Créer une fonction qui affiche la moyenne du tableau.
        3) Créer une fonction qui affiche la valeur la plus petite du tableau.
        */
        function big($tab){
            $max=$tab[0];
            $value=$tab[0];
            for($i=0; $i<sizeof($tab);$i++){
                if($max>=$value){
                    $value=$max;
                }
                $max=$tab[$i];
            }
            print_r($tab);
            echo "<p>le nombre le plus grand du tableau est :$value</p>";
        }
        big(array(1,2,3,4,5,10,6,7,8,9));

        function moyenne($tab){
            $mo=0;
            foreach($tab as $nb){
                $mo+=$nb;
            }
            return $mo/sizeof($tab);
        }
        echo "<p>la moyenne du tableau est :".moyenne(array(1,2,3,4,5,10,6,7,8,9))."</p>";
        echo "<p>la moyenne du tableau est :".moyenne(array(5,5))."</p>";

        function mini($tab){
            $min=$tab[0];
            $value=$tab[0];
            for($i=0; $i<sizeof($tab);$i++){
                if($min<=$value){
                    $value=$min;
                }
                $min=$tab[$i];
            }
            echo "<p>le nombre le plus petit du tableau est :$value</p>";
        }
        mini(array(1,2,3,4,5,10,6,7,8,9));

        /*Exercice 12 :
            On a ce tableau multidimensionnel là :
            $tab = [[1,2,3],[4,5,6],[7,8,9]]
            Afficher chaque nombre les uns sous les autres
        */ 
        $tab = [[1,2,3],[4,5,6],[7,8,9]];
        foreach($tab as $nb){
            print_r($nb);
            foreach($nb as $valeur){
                echo "<p>$valeur</p>";
            }
        }
    ?>
    
</body>
</html>