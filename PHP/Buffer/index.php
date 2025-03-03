<?php
include "data.php";

$T='';
for($i=0;$i<3;$i++){
    if($i%2 == 1){
        $T.=$i;
        break;
    }
}
echo $T;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1><?php echo $titre ?></h1>
    <ul>
        <?php echo $aliment ?>
    </ul>
</body>
</html>