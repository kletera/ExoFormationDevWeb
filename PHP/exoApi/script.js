// Récupérer les informations d’un utilisateur à partir de son id
fetch('http://localhost/PHP/exoApi/utilisateur.php')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);

    })
    .catch(error => {
        console.error(error);
    })

// Mettre à jour les informations d’un utilisateur en connaissant son ancien email (pseudo)
const DATA = {
    old_login_user : "naruto@konoha.jp",
    new_login_user : "pendragon@konoha.sup"
}
//Création des paramètres de la requête
const INIT = {
    method: "PUT",
    mode: "cors",
    body: JSON.stringify(DATA) //Ici j'encode les données envoyés en JSON
};
fetch('http://localhost/PHP/exoApi/update.php',INIT)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);

    })
    .catch(error => {
        console.error(error);
    })


// Supprimer un utilisateur en connaissant son email
// Mettre à jour les informations d’un utilisateur en connaissant son ancien email (pseudo)
const DELET = {
    email_user : "TUTU",
}
//Création des paramètres de la requête
const INT = {
    method: "PUT",
    mode: "cors",
    body: JSON.stringify(DELET) //Ici j'encode les données envoyés en JSON
};
fetch('http://localhost/PHP/exoApi/sup.php',INT)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);

    })
    .catch(error => {
        console.error(error);
    })