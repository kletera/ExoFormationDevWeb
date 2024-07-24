function tableau(tab){
    let moyenne=0;
    for(let i=0; i<3;i++){
        moyenne+=tab[i];
    }
    moyenne/=3;
    if(moyenne>=15){
        return "Très Bien";
    }else if(moyenne>=10){
        return "Assez Bien";
    }else{
        return "refus"
    }
}
console.log(tableau([19,18,20]));
console.log(tableau([2,1,6]));
console.log(tableau([10,11,10]));

console.log("------------");

let User={
    nom:"Freezer",
    age:"?",
    passion:{
        passion1: "Goku",
        passion2: "génocide",
    },
}
console.log(User.passion);

console.log("------------");

let toutP=document.getElementsByTagName('p');
console.log(toutP);