<?php 
//fonction de nettoyage de données
//Param : string
//Return : string
function sanitize($data){
    return htmlentities(strip_tags(stripslashes(trim($data))));
}
?>