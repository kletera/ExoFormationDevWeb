function Contact(){
    return <>
    <h1>Contact</h1>
    <form action="" method="post" className="formulaire">
        <input type="text" name="nom" placeholder="Nom"/>
        <input type="text" name="prenom" placeholder="Prénom"/>
        <input type="email" name="mail" id="" placeholder="Email"/>
        <textarea name="text" id="" placeholder="Placer votre commentaire ici:"></textarea>
        <input type="submit" value="Soumetre" />
    </form>
    </>
}

export default Contact