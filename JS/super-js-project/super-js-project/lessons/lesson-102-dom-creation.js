//! Placer des elements dans une page web
//? Une fonction type querySelector pour récupérer UN (le 1er trouvé) élément par la NodeList
// let allParagraphes = document.querySelectorAll('p');
let allParagraphes = document.querySelectorAll('p');
let laDiv = document.querySelector('.vide');
let premierH1 = document.querySelector('h1');

// document.body.insertBefore(allParagraphes[9],premierH1);

// let premierH1 = document.querySelector('h1');
// //! insertBefore, on selectionne 2 éléments pour placer l'un avant l'autre
// document.body.insertBefore(allParagraphes[9],premierH1);

laDiv.append(`Là c'est JS qui ajoute du texte dans la div`);
// Append plutot pensé pour ajouter du contenu à la volé au format string
// si on a crée ou séléctionné un élément que l'on veut placer : ceci peut marcher
laDiv.append(allParagraphes[4]);
// // Mais on a aussi la fonction appendChild;
laDiv.appendChild(allParagraphes[0]);
// document.body.removeChild(premierH1);

// //! On peut aussi supprimer un élément du DOM
// laDiv.removeChild(allParagraphes[4]);


let appDiv = document.querySelector('#app');
appDiv.removeChild(premierH1);

const newTxt = document.createTextNode('SUPER COOL');
// document.body.append(newTxt);
appDiv.append(newTxt);

const newH1 = document.createElement('h1');
//la ligne du dessus equivalent à <h1></h1> 
newH1.innerText = 'AZERTYUIOP';
//la ligne du dessus equivalent à <h1>AZERTYUIOP</h1> 
newH1.style.backgroundColor = 'red';
//la ligne du dessus equivalent à <h1 style={css}>AZERTYUIOP</h1> 
appDiv.append(newH1);
// document.body.append(newH1)
// console.log(allParagraphes);

const newImg = document.createElement('img');
newImg.src = 'https://picsum.photos/200/300';
appDiv.append(newImg);

console.log(document.querySelectorAll('a'));

const newLien = document.createElement('a');
newLien.href = 'https://picsum.photos/';
newLien.innerText = 'cliquez ici';
appDiv.append(newLien);

console.log(app);



