// ! EXO 8 OBJECTS
// TODO : Refaire l'exo avec les passions en mode objet
let nameUser = 'Dong Rodrigue';
let ageUser = 65;

let objetUser = {
    'nom' : nameUser,
    'age' : ageUser,
    'passions': {
        passion1:'Le Drift',
        passion2:'Jonquilles'
    }
};

console.log('objet de utilisateur : ',objetUser);
console.log(objetUser.nom);
console.log(objetUser['passions']);
console.log(objetUser.passions.passion2);