
    <main>
        <h1>Accueil</h1>
        <section class="<?php echo $header->getClass() ?>">
            <h2>Inscription</h2>
            <form action="" method="post">
                <input type="text" name="name_user" placeholder="Votre Nom">
                <input type="text" name="first_name_user" placeholder="Votre Prenom">
                <input type="text" name="login_user" placeholder="Votre Login : email">
                <input type="text" name="password_user" placeholder="Votre Mot de Passe">
                <input type="submit" name="inscription">
            </form>
            <p><?php echo $controlerAccueil->getMessage() ?></p>

            <h2>Connexion</h2>
            <form action="" method="post">
                <input type="text" name="loginCo" placeholder="Votre Login : email">
                <input type="text" name="passwordCo" placeholder="Votre Mot de Passe">
                <input type="submit" name="connexion">
            </form>
            <p><?php echo $controlerAccueil->getMessageCo() ?></p>
        </section>
        <section>
            <?php echo $controlerAccueil->getListUser() ?>
        </section>
    </main>
