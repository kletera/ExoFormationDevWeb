//! EXO 7 - IF ELSE
// TODO: Créer une fonction reçoit un tableau de 3 notes et qui calcule une moyenne entre ces 3 notes
// TODO: Dans cette ƒ°, SI la moyenne est suppérieur ou égale à 15 on renvoi une string (très Bien) 
// TODO: Dans cette ƒ°, SINON SI la moyenne est suppérieur ou égale à 10 on renvoi une string (assez Bien) 
// TODO: Dans cette ƒ°, SINON renvoi une string (refus) 

// function msgMentionBacOfficiel(tabNotes) {
//     let moyenneCalc = (tabNotes[0]+tabNotes[1]+tabNotes[2])/tabNotes.length;
//     console.log('la Moyenne au Bac : ',moyenneCalc);
//     if (moyenneCalc>=16) {
//         return "Tu as Gagné !"
//     } else if (moyenneCalc >=10 && moyenneCalc<16) {
//         return 'Assez Bien'
//     } else {
//         return 'YO T NUL GRO'
//     }
// };
// console.log(msgMentionBacOfficiel([13,6,3]));


//! Exo 5.3 Lea moyenne au bac de Tibo
let notesTiboInShape = [0,3,4,6,18,19,4];
function calculerMoyenneAvecPhrase(notes) {
    let somme = 0;
    for (let i = 0; i < notes.length; i++) {
        somme += notes[i];
    }
    let moyenne = somme / notes.length;

    if (moyenne > 16) {
        return "Super";
    } else if (moyenne >= 10 && moyenne <= 16) {
        return "Presque";
    } else if (moyenne === 10) {
        return "C'est Juste";
    } else {
        return "C'est raté";
    }
}
let moyenneTiboInShape = calculerMoyenneAvecPhrase(notesTiboInShape);
console.log('La mention de de TiboInShape est :', moyenneTiboInShape);


