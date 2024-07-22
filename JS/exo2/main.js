// EXO 5.2
function moyenne(note1,note2){
    console.log((note1+note2)/2)
}
moyenne(10,13);

// EXO 5.3
function moyenneBac(tab){
    let result=0;
    for(let i=0; i<tab.length; i++){
        result+=tab[i];
    }
    return result/tab.length;
}
console.log("La moyenne du bac de Tibo est de :",moyenneBac([10,9,8,16,14,13,11]));

console.log("------------");
//TODO : Pourquoi ca beug ?
function buggyFunction() {
    let wtf = 9;
    console.log(wtf);
}; 
buggyFunction();
console.log(wtf);

/* Ici ce qui beug c'est le console.log(wtf); après la fonction.
    la variable wtf est unique à la fonction elle n'est pas enregistrer hor de la fonction.
    Donc ici ta fonction marche mais pas le console.log hors de la fonction car ta variable n'est pas définie hors de la fonction.
*/
// Sollution:
function buggyFunction() {
    let wtf = 9;
    console.log(wtf);
}; 
buggyFunction();
console.log("------------");
//TODO : Pourquoi ca beug / Pourquoi ca marche pas ?
// function functionBugParent() {
//     let something = 9;
//     console.log(something);
//     console.log(lesNews);


//     function functionBugEnfant() {
//         let lesNews = `il est 99h67`;
//     }
// };
// functionBugParent();
// console.log(something);

/*
 Ici il y a plusieur probleme. Tout d'abord tu à oublier d'appeler la fonction functionBugEnfant().
 Ensuite ton console.log(lesNews); na rien a faire dans cette fonction il doit etre placer dans functionBugEnfant().
 Parce que ta variable lesNews n'est pas défini dans ta fonction functionBugParent() mais dans la fonction functionBugEnfant().
 Chaque variable dans une fonction est unique à sa fonction et ne peut être utiliser hors de sa fonction.
 C'est pour ca que quand tu a fait console.log(something) tu obtien 2 résultat différant l'un est de la variable hors de la fonction et l'autre est de celui dans ta fonction.
je sais pas si tu voulai faire une incrémentation(ajouter) a somthing mais si c'est cà voilla sa que sa donnerai.
*/
// Solution:
let something = 44;
function functionBugParent() {
    something+= 9;
    console.log(something);
   


    function functionBugEnfant() {
        let lesNews = `il est 99h67`;
        console.log(lesNews);
    }
    functionBugEnfant()
}
functionBugParent();