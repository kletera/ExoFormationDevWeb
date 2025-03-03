<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        // Exercice 2
        // Prix TTC = PrixHT*(1 + TVA)*quantité
        $nbArticle=5;
        $TVA=0.2;
        $prixBarbie=20;
        echo "Nombre d'article acheter =",$nbArticle;
        echo "<br>";
        echo "TVA = ", $TVA;
        echo "<br>";
        echo "Prix Barbie =", $prixBarbie;
        echo "<br>";
        $PrixTTC=$prixBarbie*(1+$TVA)*$nbArticle;
        echo "Cout Totale=",$PrixTTC;
        echo "<br>";

        // exercice 3

        $a="bonjour";
        echo "<p> $a l'adrar</p>";

        // Déclaration d'une fonction : à l'aide de la commande function
        function nomDeMaFonction(){
            echo "<p>Voila ma fonction</p>";
        }
        // Appeler une fonction
        nomDeMaFonction();

        // Une fonctio peut posséder des paramètre :
        function addition($nb1,$nb2){
            echo "<p> Le résultat est : ".$nb1+$nb2."</p>";
        }
        addition(8,1);

        // Une fonction peut nous renvoeyer / retourner une valeur : avec return
        // le but d'un return est de sortire une aleur de la fonction pour l'utiliser plus tard
        function f($nb1,$nb2){
            return $nb1-$nb2;
        }
        $r=f(6,5);
        echo "<p> Le résultat est : ".$r."</p>";
        echo "<br>";

        // Exercice 4
        function float($nb){
            return round($nb);
        }
        echo "Résultat ".float(12.7);
        echo "<br>";
        function trois($nb1,$nb2,$nb3){
            return $nb1+$nb2+$nb3;
        }
        echo "Résultat ".trois(5,10,3);
        echo "<br>";
        function moyenne($nb1,$nb2,$nb3){
            return ($nb1+$nb2+$nb3)/3;
        }
        echo "Moyenne ".moyenne(10,20,8);

        // EXO6 Créer une fonction qui teste si un nombre est positif ou négatif (echo dans la page web).
        function null($nb): void{
            if($nb<0){
                echo"<p>$nb est positif</p>";
            }else if($nb>0){
                echo"<p>$nb est négatif</p>";
            }else{
                echo"<p>$nb est null</p>";
            }
        }
        null(5);
        null(-1);
        null(0);

        // EXO7 Créer une fonction qui prend en entrée 3 valeurs et retourne le nombre le plus grand (echo dans la page web).
        function Maxt($nb1,$nb2,$nb3){
            if($nb1>$nb2 && $nb1>$nb3){
                return $nb1;
            }else if($nb2>$nb1 && $nb2>$nb3){
                return $nb2;
            }else{
                return $nb3;
            }
        }
        echo"Max :".Maxt(10,2,5);
        echo" Max :".Maxt(8,23,3);
        echo" Max :".Maxt(1,2,3);
        echo "<br>";

        // EXO8 Créer une fonction qui prend en entrée 3 valeurs et retourne le nombre le plus petit (echo dans la page web).
        function petit($nb1,$nb2,$nb3){
            if($nb1<$nb2 && $nb1<$nb3){
                return $nb1;
            }else if($nb2<$nb1 && $nb2<$nb3){
                return $nb2;
            }else{
                return $nb3;
            }
        }
        echo" MIN :".petit(10,2,5);
        echo" MIN :".petit(8,23,3);
        echo" MIN :".petit(1,2,3);

        // EXO9 Créer une fonction qui prend en entrée 1 valeur (l’âge d’un enfant). Ensuite, elle informe de sa catégorie (echo dans la page web) :
        function age($ans){
            if($ans==6  or $ans==7){
                return "<p>L'enfant est Poussin<p>";
            }else if($ans==8  or $ans==9){
                return "<p>L'enfant est Pupille<p>";
            }else if($ans==10  or $ans==11){
                return "<p>L'enfant est Minime<p>";
            }else if($ans>=12){
                return "<p>L'enfant est Cadet<p>";
            }else{
                return "<p>L'enfant est trop jeune pour skier<p>";
            }
        }
        echo age(5);
        echo age(6);
        echo age(8);
        echo age(23);
    ?>
    

</body>
</html>