<?php
$titre="Le PARFAIT Kebab !";
$ingredient=["Tomate","Salade","Oignon","Sauce Blanche","Fritte"];

function dispalyIngredient($tab){
    foreach($tab as $ingredient){
        ?>
        <li><?php echo $ingredient ?></li>
        <?php
    }
    return ob_get_clean();
}
$aliment=dispalyIngredient($ingredient)
?>