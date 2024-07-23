// ? syntaxe  { uneProprieté:uneValeur } 
// ? dans un objet on assigne avec : plutot qu'avec = 
let user = {
    id:3657826,
    'name':'Seagal',
    firstname:'Steven',
    badges:['🎥','👮‍♂️','🎸','🥋','🎤'],
    // Dans un objet no need du mot clé function
    lol(){
        console.log('cool');
    },
};
console.log(user);
console.log(user.badges[3]);
//! Notation object en point
console.log(user.id);
//! Notation tableau associatif
console.log(user['id']);
user.lol();
// ? On peut ajouter simplement des propriétés dans un objet avec une assignation de valeur
// ? Si on assigne à une propriété déjà existante cela écrase la valeur
// ? Mais Si on assigne à une propriété non existante cela créee la propriété
user.dps = 9999;
user.prenom = 'jjojo';


// ? On peut supprimer une propriété 
delete user.badges;
console.log(user);

// ? une ƒ° native de JS poour connaitre les propriétés d'un objet, hasOwnProperty()
let menuDuJour={
    entree:"Bassine d'Aioli",
    plat:"Rat Adulte",
    dessert:'île Fidji'
};
console.log(menuDuJour);
console.log(menuDuJour.hasOwnProperty('entree'));


