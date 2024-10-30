class CompteBancaire{
    constructor(nom){
        this.nom=nom;
        this.balance=0;
    }
    crediter(amount){
        console.log(`Ajout de: ${amount} pour: ${this.nom}`);
        return this.balance=this.balance+amount;
    }
    retrait(money){
        if(money>this.balance){
            throw new Error(`----->${this.nom}, retrait de: ${money} refusé avec solde: ${this.balance}`);
        }else{
            console.log(`Retrait de: ${money} pour: ${this.nom}`);
            return this.balance=this.balance-money;
        }
    }

    virement(money,beneficiaire){
        console.log(beneficiaire);
        console.log(`Virement de: ${money} de: ${this.nom} vers: ${beneficiaire.nom}`);
        this.retrait(money);
        beneficiaire.crediter(money);
        
    }
}

  // Main, gère 3 comptes bancaires dans un tableau associatif
  const lesComptes = {
    Alex: new CompteBancaire("Alex"),
    Clovis: new CompteBancaire("Clovis"),
    Marco: new CompteBancaire("Marco"),
    };
    console.log(lesComptes);
    // lecture tableau associatif ou Objet["truc"]
    // Crédite  chaque compte
    for (let key in lesComptes) {
      lesComptes[key].crediter(1000);
    }
    // un retrait de 100 par Alex
    lesComptes["Alex"].retrait(100);
    // un petit virement: Marco Vire 300 à Clovis
    lesComptes["Marco"].virement(300, lesComptes["Clovis"]);
    // un petit retrait incorrect (doit déclencher erreur custom) : 
    // Alex fait un retrait de 1200
    try{
        lesComptes["Alex"].retrait(1200);
    }catch(e){
        console.warn(e);
    }
    // bilan : faire une déscription de tous les comptes en console (ou DOM ?)
    for (let i in lesComptes){
        console.log(`titulaire: ${lesComptes[i].nom}, solde ${lesComptes[i].balance}`);
      }