//!-------INTRO JS LES VARIABLES-------
//! EXO 1 VARIABLES 
//TODO: On doit se débrouiller pour créer une variable, 
//TODO: Lui Assigner une valeur (genre un nombre ou une chaine de caractère)
//TODO: On doit afficher cette Variable dans la console du navigateur
//Déclaration
let monNumFetiche;
// Assignation
monNumFetiche = 77;
// Déclaration + Assignation
let maVariable = 11;
let uneAutreVariable = 'Steven Seagal';
let monTabloClient = ['Client1',maVariable,109];
let uneVariableObjet = {
    // ↓ Propriétés de l'objet (auxquelles on assigne 
    //des valeur mais avec les : pas le =)
    'ChuckNorris':99,
    'StevenSIgal' : 100,
    'BruceWillis' : 'DieHard',
    unePropriete : 'lol'
};

let maFonctionHello = function(){
    console.log('Coucou');
}
console.log(maVariable);
console.log(uneAutreVariable);
console.log(monTabloClient);
console.log(monTabloClient[1]);
console.log(uneVariableObjet);
console.log(uneVariableObjet.BruceWillis);
console.log(uneVariableObjet['ChuckNorris']);
console.log('HELLO WORLD');
maFonctionHello();
console.log(maFonctionHello);