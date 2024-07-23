//!-------INTRO JS LES VARIABLES-------
//! EXO 1 VARIABLES 
//TODO: On doit se débrouiller pour créer une variable, 
//TODO: Lui Assigner une valeur (genre un nombre ou une chaine de caractère)
//TODO: On doit afficher cette Variable dans la console du navigateur
//Déclaration
// let monNumFetiche;
// // Assignation
// monNumFetiche = 77.1;
// // Déclaration + Assignation
// let maVariable = 11;
// let uneAutreVariable = 'Steven Seagal';
// let monTabloClient = ['Client1',maVariable,109];
// let uneVariableObjet = {
//     // ↓ Propriétés de l'objet (auxquelles on assigne 
//     //des valeur mais avec les : pas le =)
//     'ChuckNorris':99,
//     'StevenSIgal' : 100,
//     'BruceWillis' : 'DieHard',
//     unePropriete : 'lol'
// };

// let maFonctionHello = function(){
//     console.log('Coucou');
// }
// console.log(maVariable);
// console.log(uneAutreVariable);
// console.log(monTabloClient);
// console.log(monTabloClient[1]);
// console.log(uneVariableObjet);
// console.log(uneVariableObjet.BruceWillis);
// console.log(uneVariableObjet['ChuckNorris']);
// console.log('HELLO WORLD');
// maFonctionHello();
// console.log(maFonctionHello);
// console.log(77.1);




/**
 * **************************************
 * Le problem VAR
 * **************************************
 */
//!Quizz : ca bug
// var voiture = "Renault";
// console.log(voiture);
// var voiture = "BMW";
// console.log(voiture);

//!Quizz : ca bug (ouin ouin)
// console.log(bolide);
// let bolide = 'Jaguar';

//!Quizz ca bug
// function choixVoiture(){
//     var uneVoiture = "Harley Davidson"
// }

// choixVoiture();
// console.log(uneVoiture);

//!Quizz ca bug    
// var uneVoiture = "Harley Davidson"
// function choixVoiture(){
// }

// choixVoiture();
// console.log(uneVoiture);

//! Notion de scope avec un bloc IF 
// var car = "Nissan";

// if(car=="Nissan"){
//     var vitesse = 800;
// }
// console.log(vitesse);

//! Notion de scope avec un bloc IF ici avec let on aura un meilleure erreur en console.
// var theCar = "Nissan";

// if(theCar=="Nissan"){
//     let speed = 800;
// }
// console.log(speed);

// console.log(moto);
// let moto = 'Yamaha';

// let voiture2 = 'Mitsubishi';
// const modele = 'Sport';

// let voiture2 = 'Citroen';

//!Exemple double variable du même nom ? 
// let superCar = 'BMW';
// const superModel = 'Sport';

// if(superCar =='BMW'){
//     const superVitesse = 900;
//     let superCar = "Citroen";
//     console.log(superCar);
// }
// console.log(superCar);

//! Exemple const
// const superConstante = 'YES';
// superConstante = 12;

// const unNombre = 1;
// console.log(unNombre);

// unNombre++
// console.log(unNombre);
// let interval=0;
// const cpt = setInterval(()=>{
//     // interval+1;
//     interval++;
//     console.log(interval);
// },1000)

// console.log(cpt);

//! Exception constante modif ? 
const MyTracklist = {
    track1:'lofteurs up and down',
    track2:'David Hallyday',
    track3:'Crazy Frog'
}

console.log(MyTracklist);
//! On peut modifier une propriété d'un objet 
//!même si l'objet est déclaré avec const
MyTracklist.track1 = 'félicien';
MyTracklist.track5 = 'JOJO';
console.log(MyTracklist);

//! Exception avec tableau dans tableau 
const tableau=[[1,2,3], 2];
tableau[0][1] = 6;
console.log(tableau);