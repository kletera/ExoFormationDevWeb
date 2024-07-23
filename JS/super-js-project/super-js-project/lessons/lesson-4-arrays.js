/**
 * **************************************
 * ARRAYS
 * **************************************
 */
let prenom = 'JoSé';
let age = 45;
//! On déclare un tableau avec cette syntaxe : []
//! On peut placer ce que l'on veut dans un tableau 
let unTableau = [12,'Salut ca va bien?',prenom,age];
console.log(unTableau);
console.log(unTableau[2]);
//! Exemple avec un tableau dans un tableau 
let mesPassions = ["Boxe","Jonquilles"];
let monPerso = [prenom, age, mesPassions];

//! Avec le système d'index / indice on peut accéder
//! au contenu d'une case du tableau.
//! La 1ère case du tableau est à l'indice 0.
console.log(monPerso[2]);
console.log(monPerso[2][1]);
monPerso[0] = 23;
monPerso[1] = 'YOLO';
monPerso[2][1] = 'COOL';
console.log(monPerso);
//! On peut utiliser la propriété length,
//! .length sur le tableau en lui même 
//! nous renvoi le nombre de case du tableau
console.log(monPerso.length);
//! .length sur une case précise du tableau 
console.log(monPerso[2].length);
let mesNombres = [100,200,300];
