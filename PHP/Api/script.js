fetch('http://localhost/PHP/Api/utilisateur.php')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    })

//INSCRIPTION D'UN UTILISATEUR VIA API
//Création de mon objet utilisateur à enregistrer, en respectant la nomenclature des clés
const DATA = {
    name_user : "Uzumaki",
    first_name_user:"Naruto",
    login_user : "naruto@konoha.jp",
    mdp_user :"12345"
}
//Création des paramètres de la requête
const INIT = {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(DATA) //Ici j'encode les données envoyés en JSON
};
//Envoie de la requête
fetch('http://localhost/PHP/Api/inscription.php',INIT)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    })