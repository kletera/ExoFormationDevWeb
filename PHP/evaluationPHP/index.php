<?php

include 'data.php';

$tabData=[];

array_push($tabData,$USERS_HUMAN,$USERS_PET,$USERS_XENO);
// print_r($tabData);
function afficherHummain($tab){
    foreach($tab as $data){
        // print_r($data);
        echo "<article style= 'border-bottom : 3px solid black '>";
        echo "<h2>nom : ".$data["name"]."</h2>";
        echo "<p>email : ".$data["email"]."</p>";
        echo "<p>age : ".$data["age"]."</p>";
        echo "</article>";
    }
}
// afficherHummain($tabData[0]);

function afficherAnimal($tab){
    foreach($tab as $data){
        // print_r($data);
        echo "<article style= 'border-bottom : 3px solid black '>";
        echo "<h2>nom : ".$data["name"]."</h2>";
        echo "<p>espece : ".$data["espece"]."</p>";
        echo "<p>age : ".$data["age"]."</p>";
        echo "<p>propriétaire : ".$data["propriétaire"]."</p>";
        echo "</article>";
    }
}
// afficherAnimal($tabData[1]);

function afficherXeno($tab){
    foreach($tab as $data){
        // print_r($data);
        echo "<article style= 'border-bottom : 3px solid black '>";
        echo "<h2>nom : ".$data["name"]."</h2>";
        echo "<p>espece : ".$data["espece"]."</p>";
        echo "<p>age : ".$data["age"]."</p>";
        echo "<p>niveau de menace : ".$data["menace"]."</p>";
        echo "</article>";
    }
}
// afficherXeno($tabData[2]);

function profil($tab){

    // print_r($subtab);
    foreach($tab as $cle=>$data)
    print_r($data);
    if($data['type']=='humain'){
        afficherHummain($tab);
    }
    elseif($data['type']=='animal de compagnie'){
        afficherAnimal($tab);
    }
    elseif($data['type']=='Xeno'){
        afficherXeno($tab);
    }else{
        echo "<p>Type de Profil non Existant</p>";
    }
    
}
profil($tabData[0]);
profil($tabData[1]);
profil($tabData[2]);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
</head>
<body>
    
</body>
</html>