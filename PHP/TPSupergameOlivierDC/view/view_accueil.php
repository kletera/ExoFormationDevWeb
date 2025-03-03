<!-- VUE DE LA PAGE D'ACCUEIL -->
    <main>
        <h1>Formulaire d'enregistrement de joueur</h1>
        <form action="" method="POST">
            <input type="text" name="pseudo" placeholder="Pseudo">
            <input type="email" name="email" placeholder="email">
            <input type="number" id="" name="score" placeholder="Score">
            <input type="submit" value="Ajouter" name="Ajouter">
        </form>
        <?php echo $message ?>
        <h2>Liste des Joueurs</h2>
        <button name="Afficher">Afficher</button>
        <?php echo $list ?>
    </main>