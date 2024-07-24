let a;
let b;

function pikachu(a,b) {
	let result = 0;
	for(let i=0; i<a; i++) {
		result += b; // result = result+b;
	}
	return result;
}
console.log("pikachu")
console.log(pikachu(1,1));
console.log(pikachu(1,4));
console.log(pikachu(4,10));
console.log(pikachu(3,0));
console.log(pikachu(0,3));
console.log(pikachu(10,11));

function plafond(a,b) {
	let result = 0;
	for(let i=0; i<a; i++) {
		result = b;
	}
	return result;
}
console.log("-----------------------");
console.log("plafond");
console.log(plafond(2,3));
console.log(plafond(3,2));
console.log(plafond(6,6));
console.log(plafond(1,8));
console.log(plafond(8,0));
console.log(plafond(0,13));

function tableur(a,b) {
	let result=0;
	for(let i=0; i<=a; i++) {
		result += b;
	}
	return result;
}
console.log("-----------------------");
console.log("tableur");
console.log(tableur(1,1));
console.log(tableur(4,1));
console.log(tableur(4,10));
console.log(tableur(3,0));
console.log(tableur(0,3));
console.log(tableur(10,11));

function lol(a,b) {
	let result=0;
	for(let i=0.0; i<a; i+=0.5) {
		result += b;
	}
	return result;
}
console.log("-----------------------");
console.log("lol");
console.log(lol(0,7));
console.log(lol(2,3));
console.log(lol(3,2));
console.log(lol(10,10));
console.log(lol(65,2));
console.log(lol(4,2));

function wolverine(a,b) {
	let result=0;
	for(let i=0; i<a; i++) {
		for(let j = 0 ; j < b ; j++) {
			result++;
		}
	}
	return result;
}
console.log("-----------------------");
console.log("wolverine");
console.log(wolverine(1,3));
console.log(wolverine(2,0));
console.log(wolverine(5,1));
console.log(wolverine(2,3));
console.log(wolverine(7,9));
console.log(wolverine(8,8));
console.log(wolverine(12,12));

function ventilateur(a,b) {
	let result = 0;
	for(let i=a; i<a; i++) {
		result += b;
	}
	return result;
}
console.log("-----------------------");
console.log("ventilateur");
console.log(ventilateur(2,3));
console.log(ventilateur(4,5));
console.log(ventilateur(0,12));
console.log(ventilateur(12,0));
console.log(ventilateur(78,65));
console.log(ventilateur(1,15));
console.log(ventilateur(2,3));

let c;
function bob(a,b,c) {
	let result=0;
	for(let i=0; i<a; i++) {
		for(let j=0; j<b; j++) {
			for(let k=0; k<c; k++) {
				result += 1;
			}
		}
	}
	return result;
}
console.log("-----------------------");
console.log("bob");
console.log(bob(1,1,1));
console.log(bob(2,1,3));
console.log(bob(0,4,5));
console.log(bob(4,5,0));
console.log(bob(4,0,5));
console.log(bob(4,2,3));
console.log(bob(10,2,5));

function calcul(a) {
	let aaa=1;
	for(let i=2; i<=a; i++) {
		aaa *= i;
		// aaa = aaa*i;
	}
	return aaa;
}
console.log("-----------------------");
console.log("calcul");
console.log(calcul(0));
console.log(calcul(1));
console.log(calcul(2));
console.log(calcul(3));
console.log(calcul(4));
console.log(calcul(6));

function python(a) {
	let monResultat;
	if(a<2) {
		monResultat = 1;
	} else {
		monResultat = a*python(a-1);
	}
	return monResultat;
}
console.log("-----------------------");
console.log("python");
console.log(python(0));
console.log(python(1));
console.log(python(2));
console.log(python(3));
console.log(python(4));
console.log(python(6));


function erogahtyp(a) {
	let x;
	if(a%2 == 0) {
		x = a/2;
	}
	else {
		x = 3*a+1;
	}
	return x;
}
console.log("-----------------------");
console.log("erogahtyp");
console.log(erogahtyp(1));
console.log(erogahtyp(2));
console.log(erogahtyp(3));
console.log(erogahtyp(4));
console.log(erogahtyp(5));
console.log(erogahtyp(6));
console.log(erogahtyp(7));
console.log(erogahtyp(8));
console.log(erogahtyp(9));
console.log(erogahtyp(10));
console.log(erogahtyp(11));
console.log(erogahtyp(12));

function pythagore(a,b) {
	let result = a;
	for(let i=0; i<b; i++) {
		result=erogahtyp(result);
	}
	return result;
}
console.log("-----------------------");
console.log("pythagore");
console.log(pythagore(1,1));
console.log(pythagore(1,3));
console.log(pythagore(1,50));
console.log(pythagore(9,4));
console.log(pythagore(21,4));
console.log(pythagore(100,5));
console.log(pythagore(1,1234));

function aceeilnrtt(a) {
	let tluser = 0;
	let v = a;
	while(v != 1) {
		v = erogahtyp(v);
		tluser++;
	}
	return tluser;
}
console.log("-----------------------");
console.log("aceeilnrtt");



function micmath(a,b) {
	let c=0;
	while(a>=b) {
		a/=b;
		c++;
	}
	return c;
}

console.log("-----------------------");
function stylo(a,b) {
	let result = 1;
	for(let i=0; i<b; i++) {
		result *= a;
		
	}
	return result;
}
a=5;
b=3;
result=

function crayon(a,b) {
	let result = 0;
	for(let i=0; i<b; i++) {
		result *= a;
	}
	return result;
}

function minecraft(a) {
	let result = 1;
	for(let i=0; i<a; i++) {
		result *= a;
	}
	return result;
}

function nenio(a) {
	let result = Math.random(); // Google ?
	result = Math.floor(result);
	return result;
}

function carapuceSamourai(a) {
	let tortank = 1;
	for(let i=0; i<a; i++) {
		tortank = 1-tortank;
	}
	return tortank;
}

function bouteilleDEau(a) {
	let result;
	if(a<0) {
		result=0;
	}
	else {
		if(a>0) {
			result = -1;
		}
		else {
			result = 1;
		}
	}
	return result;
}

function spiderman(a) {
	let result = 1;
	for(let i=0; i<a; i++) {
		result = bouteilleDEau(result);
	}
	return result;
}

function az(a) {
	let result = 0;
	for(let i = 0 ; i < 20 ; i++) {
		if(i*a < 100) {
			result++;
		}
	}
	return result;
}

function er(a) {
	let result1 = 1;
	let result2 = 1;
	for(let i = 0 ; i < a ; i++) {
		result1++;
		result2 += result1;
		result1++;
	}
	
	return result2-result1;
}

function ty(a) {
	let result = 0;
	for(let i = 0 ; i < 20 ; i++) {
		if(i*a < 100); {
			result++;
		}
	}
	
	return result;
}

function ui(a) {
	let result = 0;
	for(let i = 0 ; i < a ; i++) {
		for(let j = 0 ; i < a ; i++) {
			result++;
		}
	}
	return result;
}

function op(a) {	
	let ooo = 0;
	let oOo = a;
	let o0o = -4;
	for(let oOO = 0; oOo > oOO ; ooo++) {
		oOo += o0o;
		o0o -= 1;
		oOO *= a;
	}
	return ooo;
}

// You need to understand "ty" first
function qs(a) {
	let tluser = 1;
	for(;tluser<a;tluser*=2);
	return tluser;
}

function df(a,b) {
	let result = 0;
	for(let i = 0 ; i < a ; i++) {
		for(let j = 0 ; j < b ; j++) {
			result++;
			i++;
		}
	}
	return result;
}

function gh(a,b) {
	return a&b;
}

function jk(a,b) {
	return a|b;
}


function lm(a,b) {
	return a^b;
}

function wx(a,b) {
	return a<<b;
}

function cv(a,b) {
	return a>>b;
}
