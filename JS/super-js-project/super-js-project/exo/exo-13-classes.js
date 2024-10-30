// classe
class Imc{
    constructor(userName,userKg,userM){
        this.userName=userName;
        this.userKg=userKg;
        this.userM=userM;
    }
    calcul(){
        let IMC=this.userKg/(this.userM**2);
        return IMC.toFixed(2);
    }
    display(){
        console.log(`${this.userName} (${this.userKg}kg, ${this.userM}M) a un IMC de:${this.calcul()}`)
    }
}
//* progr principal -> on fait l'injection des données
let list = [
    new Imc("Sébastien Chabal", 135, 1.7),
    new Imc("Escaladeuse", 45, 1.68),
    new Imc("JOJO ", 300, 2),
    new Imc("Gontrand ", 90, 1.75),
    new Imc("Colonel Clock ", 200, 1.75),
    new Imc("JOsiane de la Vega", 99, 1.55),
];
// //*Boucle forEach qui parcourt le tableau avec une variable temporaire uneCase
list.forEach((uneCase) => uneCase.display());

console.log('--------------------');

class Employee{
    constructor(nomE,prénom,age,salaireM){
        this.nomE=nomE;
        this.prénom=prénom;
        this.age=age;
        this.salaireM=salaireM;
    }
    getCout(){
        return this.salaireM*12;
    }
    calculCout(){
        return this.getCout()*12*(1+0.9);
    }
}
class Pme{
    constructor(nom,equipe,vente,ff,fa){
        this.nom=nom;
        this.equipe=equipe;
        this.vente=vente;
        this.ff=ff;
        this.fa=fa;
    }
    bilanCalculed(){
        console.log(this.equipe[0]);
        let calculTotal=0;
        for(let i=0;i<this.equipe.length;i++){
            calculTotal+= this.equipe[i].calculCout();
        }
        console.log(calculTotal);

        let bilan=this.vente-this.ff-this.fa-calculTotal;
        console.log(`${this.nom} - : Cout Initial : ${this.ff+this.fa}`);
        console.log(`${this.nom} - : Cout Total Equipe : ${calculTotal}`);
        console.log(`${this.nom} - : VENTES : ${this.vente}`);
        console.log(`${this.nom} - : BILAN : ${bilan}`);
    }
}

//Scénario
const pme = new Pme (
    //Le nom entreprise
      "Ma Petite Entreprise - ", 
      //L'equipe de salariés (un tableau)
      [new Employee ("Duval", "Paul", 30, 2000),
      new Employee ("Durand", "Alain", 40, 3000),
      new Employee ("Dois", "Sylvia", 50, 4000),],
       //le revenu , frais fixe, frais d'achat
      300000,
      20000,
      50000);
  pme.bilanCalculed();