// !------------- LES BOUCLES pour ARRAY MAP() ------------------
// ! EXO MAP
// TODO :JS map phase 1
// TODO : côté template html rajouter plein de <p></p>
// TODO :On va récupérer TOUS les <p> de notre page dans une variable lesTxt via getElementsByTagName
// TODO :On va faire un console log de lesTxt 
//* On récupère TOUS les <p>
const lesTxt = document.body.getElementsByTagName("p");
console.log(lesTxt);
// const premierP = document.body.getElementsByTagName("p")[0];
// const lesTxt = document.getElementsByTagName("p");
// premierP.innerText = "YOOOOOLOOOOOOO";
// console.log(lesTxt);
// console.log(premierP);
//HTMLCollection a un système d'indice aussi comme les tableau
// console.log(lesTxt[0]);
// lesTxt[0].innerText = 'SUPER';

// let text = "ABCDEFG"
// const myArr = Array.from(text);
// console.log('-------------');
// console.log(text);
// console.log(myArr);

//TODO JS map Phase 2 
//TODO Avec la methode Array.from(), dans une nouvelle variable textesTab on va transformer notre htmlCollection en array
//TODO On console log la variables textesTab 
//* On transforme le HTMLCollection(qui contient tous nos <p>) en Array classique
const textesTab = Array.from(lesTxt);
console.log(textesTab);

//TODO JS Map Phase 3 (on peut travailler sur un Array)
//TODO Sur textesTab on va utiliser la ƒ° map(),
//TODO dans map(), on va lui passer en param une fonction fléchée qui elle a en parametre une variable temporaire (auChoix)
//TODO cette fonction fléchée elle va modifier le innerHTML ou innerText de la variable temporaire
//* On utilise une variable temporaire uneCase pour que map stock chaque <P> dans
//* Cette variable uneCase, on peut s'en servir pour modifier le innerHtml
textesTab.map(uneCase => uneCase.innerText = "<h1>LOL JE SUIS HACKERMAN</h1>" );
// textesTab.map(uneCase => uneCase.innerHTML = "<h1>LOL JE SUIS HACKERMAN</h1>" );

//? bonus syntaxe en ƒ° classic
//! Dans la fonction que l'on passe dans map(), si on met un 2nd param
//! C'est l'index du tableau
textesTab.map(function(x,i){
    x.style.color = "red";
    console.log(i)
});

//? bonus syntaxe en ƒ° fléchée
textesTab.map((x,i) => {
    x.style.color = "red";
    console.log(i)
});
console.log(textesTab);

textesTab.map(toto => toto.addEventListener('click',megaClick));
// textesTab.map(toto => toto.addEventListener('click',function(){
//     console.log("SUPER CA CLICK");
// }));


function megaClick(){
    console.log('mega click ');
}

//! JS map Phase 1

// const lesTxt = document.getElementsByTagName('p');
// console.log(lesTxt);

// //! JS map Phase 2
// let textesTab = Array.from(lesTxt);
// console.log(textesTab);

// //! JS map Phase 3
// const map1 = textesTab.map(elementDontHTMLSeModifie => elementDontHTMLSeModifie.innerHTML="<h3>Un petit titre en plus<h3>" );
// console.log(map1);




// firstImg.addEventListener('click',()=>{
//   console.log('CA CLICK A DONF');
// });