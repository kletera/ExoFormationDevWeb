<main>
    <h1>Catégories</h1>
    <section>
        <h2>Ajouter une Catégorie</h2>
        <form action="" method="POST">
            <input type="text" name="name_category" placeholder="Nom de la Catégorie">
            <input type="submit" name="ajouterCat">
        </form>
        <p><?php echo $message ?></p>
    </section>
    <section>
        <h2>Liste des Catégories</h2>
        <ul>
            <?php echo $listeCategories ?>
        </ul>
    </section>
</main>