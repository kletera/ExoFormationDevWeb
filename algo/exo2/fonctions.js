// Écrire une fonction f1 qui ne prend rien en entrée, et qui affiche 17 dans la console.
function f1(){
    console.log(17);
}
// Utiliser la fonction f1 pour afficher 17 dans la console.
f1();

// Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 18.
function f2(){
    return 18;
}
// Utiliser la fonction f2 pour afficher 18 dans la console.
console.log(f2());

// La fonction f2 a l'air moins pratique à utiliser. Quel intérêt pourrait-elle avoir par rapport à f1 ?
//L'intérêt de f2 par rapport à f1 est qu'il met fin a sa fonction.

// Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.
function f3(x){
   console.log(x*2)
}
// Utiliser la fonction f3 pour écrire dans la console le double de 97.
f3(97);

// Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre.
function f4(x){
    return x*2;
 }
// Utiliser la fonction f4 pour écrire dans la console le double de 98.
console.log(f4(98));

// Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.
let a=f4(99);
console.log("Verifiation de la variable a", a);

// Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.
function f5(x,y){
    console.log(x+y);
}

// Utiliser la fonction f5 pour écrire dans la console la somme de 43 et 76.
f5(43,76);
// Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.
function f6(x,y){
    return x+y;
}

// Utiliser la fonction f6 pour écrire dans la console la somme de 41 et 78.
console.log(41,78);

// Utiliser la fonction f6 pour incrémenter la variable a de la somme de 42 et 77.
a+=f6(42,77);
console.log("Verifiation de la variable a", a);

// Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.
function f7(x,y){
    if(x>y){
        console.log(x);
    }else{
        console.log(y);
    }
}
f7(7,8);
// Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.
function f8(x,y,z){
    if(x>y && x>y){
        return x;
    }else if(y>x && y>z){
        return y;
    }else{
        return z;
    }
}
console.log(f8(3,2,1));
console.log(f8(4,6,5));
console.log(f8(7,8,9));
// (Au moins deux versions possibles : sans utiliser f7, et en utilisant f7).
// Écrire une fonction f9 qui prend un nombre et un mot en entrée, et qui affiche dans la console ce mot ce nombre de fois.
function f9(x,y){
    for(let i=0; i<x; i++){
        console.log(y);
    }
}
f9(5, "A moi");

