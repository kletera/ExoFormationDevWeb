let caractères="hello";
let nombre=1;
let nbVirgule= 2.52;
let tableaux=[1,2,3,4,5, "moi"];
let objet= {
    nom:"Dalle Carbonare",
    prénom:"Olivier",
    age: 24,
};

console.log(caractères);
console.log(nombre);
console.log(nbVirgule);
console.log(tableaux);
console.log(objet);

let fonctionVar=variable();
function variable(){
    console.log("Hello World");
}

console.log("-------------");

let a=0;
function calcul(){
    a++;
    a+=4.6;
    a--;
    a*=10.5;
    a/=5;
    a%=5;
    console.log(a);
}
calcul();

console.log((a+100*(50+20)-3.2^4)%5+78*32/20.6);

let compteur=0;
function composé(){
    compteur++;
    compteur+=4.6;
    compteur--;
    compteur*=10.5;
    compteur/=5;
    compteur%=5;
    compteur<<10
    compteur>>=9
    compteur&=6.3;
    compteur^=30;
    compteur|=80;
    console.log(compteur);
}
composé()

console.log("-------------");

let nom="Dupuis";
let pizza="calzone";
let date="12/12/12";
let SumUpOrderPhrase=nom+" à commander une "+pizza+" pour le "+date;
console.log(SumUpOrderPhrase);

function hummour(){
    blague={
        1:`Qu'est-ce qu'une pizza dit à une autre pizza qui lui fait de l'ombre\n?"Arrête de me trancher la route"`,
        2:`Pourquoi les pizza ne vont-elle jamais à la plage ? Parce\nqu'elle détestent le sable-witch!`,
        3:`Comment appelle t-on une pizza qui se prend pour un chien ?\nUn pizzanichien`,
        4:`Pourquoi les pizza sont-elles de si bon détectives ? Parce\nqu'elles ont toujours une bonne olfaction !`,
        5:`Quelle est la dance préférée des pizzas ? La pizzacarena !`,
        6:`Pourquoi les pizzas sont-elles toujours bien entourées ? Parce\nqu'elles ont une bonne croûte sociale !`,
        7:`Qu'est-ce qu'une pizza a dit à une autre pizza qui lui demandait\ndes conseils ? "Suis ta pâte et tout ira bien !"`,
    }
    console.log(blague[1]);
}
hummour();

console.log("------------");
let name="Olivier";
let age=24;
let passion=["manga","jeux"];
let tabUser=[name,age,passion];
console.log("Info utilisateur:",tabUser);
console.log("Les passion de l'utilisateur sont:",tabUser[2]);
console.log("La deuxieme passion de l'utilisateur est:",tabUser[2][1]);

console.log("------------");
let leNom = "Super";
let lePrénom="Jefffff" ;
let laPhrase=[];
laPhrase.push(leNom,lePrénom,leNom[0]+lePrénom[0]);
console.log(laPhrase);
