console.log('101');
//? Une fonction type getElement pour récupérer tous les élément selon une certaine balise dans une HTMLCollection
// let tousLesP = document.getElementsByTagName('p');
// let premierP = document.getElementsByTagName('p')[0];
// console.log('La HTMLCollection',tousLesP);
// console.log('premierP',premierP);
// console.log('Le 2e P',tousLesP[1]);

// premierP.innerText = "Pascal Winner";
// tousLesP[2].innerText = 'YOLO jai Hacké le truc';

// let lePsuper = document.getElementsByClassName('super');
// console.log('lePsuper',lePsuper);
// let lePcool = document.getElementById('cool');
// console.log('lePcool',lePcool);

//? Une fonction type querySelector pour récupérer UN élément (le 1er trouvé)
let lePremierP = document.querySelector('p');

console.log('lePremierP via querySelector : ',lePremierP);

let tousLesP = document.querySelectorAll('p');
console.log('tousLesP via querySelectorAll : ',tousLesP);

let lePremierId = document.querySelector('#cool');
console.log('1er Id via querySelectorAll : ',lePremierId);
let laPremierClass = document.querySelector('.super');
console.log('1er Classe via querySelectorAll : ',laPremierClass);
let touteLesClasses = document.querySelectorAll('.super');
console.log('toutes Classe via querySelectorAll : ',touteLesClasses);

//! Placer des elements dans une page web
//? Une fonction type querySelector pour récupérer UN (le 1er trouvé) élément par la NodeList
let allParagraphes = document.querySelectorAll('p');
// let laDiv = document.querySelector('.vide');
let premierH1 = document.querySelector('h1');
//! insertBefore, on selectionne 2 éléments pour placer l'un avant l'autre
document.body.insertBefore(allParagraphes[2],premierH1);


