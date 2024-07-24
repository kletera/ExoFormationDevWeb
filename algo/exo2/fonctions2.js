/*
Écrire une fonction syracuse qui prend un nombre en entrée, et qui retourne :
- le triple du nombre + 1 si le nombre est impair
- la moitié du nombre sinon
*/
function syracuse(x){
    if(x%2!=0){
        return x*3+1;
    }else{
        return x/2;
    }
}
console.log(syracuse(4));
console.log(syracuse(5));
/*
Écrire une fonction countdown qui reçoit un nombre positif en entrée, et qui affiche dans la console le compte à rebours jusqu'à 0 en partant de ce nombre.
Par exemple, l'appel à `countdown(3)` devra afficher
3
2
1
0
*/
function countdown(x){
    for(let i=0; i<=x;i){
        console.log(x);
        x-=1;
    }
}
countdown(3);
/*
Écrire une fonction fastCountdown qui reçoit un nombre en entrée et qui affiche un compte à rebours en partant de cette valeur. La valeur sera divisée par 2 à chaque fois, et le compte à rebours s'arrête quand la valeur devient inférieur à 0.1.
Par exemple, l'appel à `fastCountdown(3)` devra afficher
3
1.5
0.75
0.375
0.1875
*/
function fastCountdown(x){
    while(x>0.1){
        console.log(x);
        x/=2;
    }
}
fastCountdown(3);
/*
Écrire une fonction evenNumbers qui reçoit deux nombres en entrées et qui affiche tous les nombres pairs entre ces deux nombres.
Par exemple, l'appel à `evenNumbers(5,14)` devra afficher
6
8
10
12
*/
function evenNumbers(x,y){
    if(x%2==1){
        x+=1;
        while(x<y){
            console.log(x);
            x+=2;
        }
    }else{
        while(x<y){
            console.log(x);
            x+=2;
        }
    }
}
evenNumbers(5,14);
/*
Sur la page wikipedia du PGCD (pas besoin de savoir ce que c'est), on peut trouver l'algorithme récursif suivant :
```
fonction euclide(a, b)
    si b = 0 alors retourner a
    sinon retourner euclide(b, a modulo b)
```
Écrire cette fonction.
*/
function euclide(a,b){
    if(b==0){
        return a;
    }else{
        return euclide(b,a%b);
    }
}
console.log("le résultat:",euclide(10,0));
console.log("le résultat:",euclide(6,10));
/*
À la main, calculer `euclide(6,10)`.

Calcule:
a=6
b=10

b>0
Donc on passe à else.
a%b= 6%10 = 6

Cela retourne euclide(10,6);
ce qui reveient à a=10 et b=6
---------------------------------
b>0

Donc on passe à else
a%b= 10%6=4
On retourne euclide(6,4);
ce qui revient à a=6 et b=4
---------------------------------
b>0

Donc else
a%b= 6%4=2
On retourne euclide(4,2);
ce qui revient à a=4 et b=2
---------------------------------
b>0

Donc on passe à else
a%b= 4%2=0
On retourne euclide(2,0);
ce qui revient à a=2 et b=0
---------------------------------
b==0

Donc if
on retourne a et a=2.

Donc le résultat est 2.

*/
