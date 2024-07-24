// JS map phase 1
const lesTxt=document.getElementsByTagName('p');
console.log(lesTxt);
// JS map phase 2
const textesTab=Array.from(lesTxt);
console.log(textesTab);
// JS map phase 3
const map=textesTab.map((param)=> param.innerText="LOL JE SUIS HACKERMAN");

// Bonus : peut on faire en sorte que chaque <p> soit clickable (quand on click sur 1 <p> ca affiche un msg en console)
textesTab.map(toto => toto.addEventListener('click',function(){
    console.log("SUPER CA CLICK");
}));

//!Quizz : ca bug
//* var voiture = "Renault";
//* console.log(voiture);
//* var voiture = "BMW";
//* console.log(voiture);

/* Sa marche c'est trèb bein. CEPENDANT On ne peut pas déclarer une variable comme tu la fait. Chaque variables crée doivent avoir un nom différents sinon elle rentre en conflit.
De plus on évite de déclarer avec var sa vas te cosé des problème à ton code plus tard utilise plus tôt let et const. Ensuite si tu veux rassembler "Renault" et "BMW" dans la meme variable alors tu doit faire un tableau.
Ton code ressemblerai à ca si tout est bon:
*/
const voiture = ["Renault", "BMW"];
console.log(voiture);

//! Exo 3
//  let car = "Nissan";
//  if(car=="Nissan"){
//      let vitesse = 800;
//  }
//  console.log(vitesse);

/*On utilise jamais var. De plus ton if ici est inutile car pécédament tu à mis en sorte que dan la varibale car il y a Nissan. Ensuite normallement ton console log if serai imposible à lire par l'ordinateur car il est hors de la fonction if.
Tu peux mettre ton code commme ceci c'est plus simple.
*/
const car = "Nissan";
let vitesse = 800;
console.log(vitesse);

//! Exo 4
// let superCar = 'BMW';
// const superModel = 'Sport';

// if(superCar =='BMW'){
//     const superVitesse = 900;
//     let superCar = "Citroen";
//     console.log(superCar);
// }
// console.log(superCar);

/*C'est mieux tu utilise plus var. Mais tu utilise encore les meme nom de variable attention on ne crée pas les meme nom de variable. je sais pas trop ce que tu voulais faire mais si tu voulais changer ta variable superCar en Citroen il fallai faire comme ca.
PS: re-lis tes cours de let et const je sais pas si c'est ce que tu voulai.
*/
let superCar = 'BMW';
const superModel = 'Sport';
if(superCar =='BMW'){
    const superVitesse = 900;
    superCar = "Citroen";
    console.log(superCar);
}