console.log('-------FUNCTION-------');
// On déclare la fonction sous le nom maSuperFonction et le travail qu'elle doit faire
function maSuperFonction(){
    // ICI on code ce que doit faire la ƒ°
    console.log('Ma fonction fonctionne');
    console.log(10+2);
};
// On va exec au moins 1 fois notre ƒ°
maSuperFonction();
// Quand une ƒ° a besoin de paramètres ???
function disMonNom(unNom){
    console.log(unNom);
};
disMonNom('JACKO');
console.log('-------PARAMETRE & RETURN-------');
//! EXO 5 : Function
// TODO : créer une fonction qui prend un nombre en paramètre
// TODO : La ƒ° doit afficher en console: 33 + le nombre reçu en paramètre
// TODO : créer une autre fonction qui prend 2 nombres en paramètre
// TODO : Cette seconde ƒ° doit afficher en console l'ADDITION des 2 nombres reçus en paramètre
function fonctionUn(unTruc){
    console.log(33+unTruc);
}
fonctionUn(7);

function fonctionDeux(unTruc,unBidule){
    console.log(unBidule+unTruc);
}
fonctionDeux(10,88);

//? Quand une fonction doit return quelquechose
function moins(a,b){
    return a-b;
};
// à l'execution de la ƒ° le resultat du calcul (ce que la fonction renvoit/return)
// sera stocké dans une variable monResultat
let monResultat = moins(99,20);
// Ou alors, le résultat est direct return dans un console.log()
console.log('Monresultat:',moins(99,20));
console.log('exec de la fonction direct dans console.log() : ',moins(99,20));


// PARAMETRE PAR DEFAUT
// Si à l'utilisation de la ƒ° on oubli le paramètre
//  Pas d'érreur car le param par défaut sera 'sarah'
function sayTheName(unNomBidon='OuiOui'){
    console.log(unNomBidon);
};
sayTheName();
// ? La notion de scope (la portée d'une variable)
// ? Dans l'exemple ci-dessous on a 2 fois la même variable testScope1 qui est déclarée ?????
// ? En fait même si elles ont le même nom ce ne sont pas les même espaces mémoires qui sont alloués
// ? let testScope1 = 99; est dans le scope global de notre programme 
// ? let testScope1 = 12; est dans le scope de la fonction
console.log('-------SCOPE-------');
let testScope1 = 99;
function maFonctionTestScope(){
    let testScope1 = 12;
    console.log('scope de la fonction :',testScope1);
};
maFonctionTestScope();
console.log('scope hors de la fonction :',testScope1);

//! EXO 5.1 : Quizz Function
//TODO : Pourquoi ca beug ?
/* function buggyFunction() {
    let wtf = 9;
    console.log(wtf);
}; 
buggyFunction();
console.log(wtf); */
//! EXO 5.1.2 : Quizz Function
//TODO : Pourquoi ca beug / Pourquoi ca marche pas ?
/* let something = 44;
function functionBugParent() {
    let something = 9;
    console.log(something);
    console.log(lesNews);

    function functionBugEnfant() {
        let lesNews = `il est 99h67`;
    }
};
functionBugParent();
console.log(something); */

// ? La notion de scope (la portée d'une variable)
// ? Dans l'exemple ci-dessous on a 2 fois la même variable testScope1 qui est déclarée ?????
// ? En fait même si elles ont le même nom ce ne sont pas les même espaces mémoires qui sont alloués
// ? let testScope1 = 99; est dans le scope global de notre programme 
// ? let testScope1 = 12; est dans le scope de la fonction
// let testScope1 = 99;
// function maFonctionTestScope(){
//     let testScope1 = 12;
//     console.log('scope de la fonction :',testScope1);
// };
// maFonctionTestScope();
// console.log('scope hors de la fonction :',testScope1);



//? Les fonctions Fléchées
// let somme = function(a, b) {
//     return a + b;
// };

// let leCalcul = (a, b) => a + b;
// console.log(leCalcul(1, 2));




