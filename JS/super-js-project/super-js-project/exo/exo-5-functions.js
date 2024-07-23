//! EXO 5.2 : La moyenne de 2 notes 
//TODO: Créer une fonction qui calcule la moyenne de 2 notes
//TODO: Afficher le résultat en console
let noteSport = 8;
let notePhilo = 2;
let laMoyenne = moyenne2notes(notePhilo,noteSport);
// On peut executer la ƒ° AVANT de la définir (pas d'ordre pour décrire les fonctions)
function moyenne2notes(a,b){
    return (a+b)/2;
};
console.log('La moyenne des 2 notes : ',laMoyenne);

//! Exo 5.3 Lea moyenne au bac de Tibo
let notesTiboInShape = [0,3,4,6,18,19,4];
function calculerMoyenne(notes) {
    let somme = 0;
    for (let i = 0; i < notes.length; i++) {
        somme += notes[i];
    }
    return somme / notes.length;
}
let moyenneTiboInShape = calculerMoyenne(notesTiboInShape);
console.log('La moyenne des notes de TiboInShape est :', moyenneTiboInShape);

//? Les fonctions Fléchées
function somme(a,b){
  return a + b;
}

let somme = function(a, b) {
  return a + b;
};


let leCalculAlt = (a, b) =>{ a + b};
let leCalcul = (a, b) => a + b;

console.log(leCalcul(1, 2));
