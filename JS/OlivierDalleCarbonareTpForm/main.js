// Swich toggle
const formConnexion=document.querySelector('#connexionForm');
const formInscription=document.querySelector('#inscriptionForm');
const swich=document.querySelector('#flexSwitchCheckDefault');
console.log(formConnexion,formInscription,swich);
formInscription.classList.add('disNone');

swich.addEventListener('click',()=>{
    console.log(swich.checked);
    formConnexion.classList.toggle('disNone');
    formInscription.classList.toggle('disNone');
});

// Form
const detail=document.querySelector('#securityInfo');
const connexionEmail=document.querySelector('#connexionInputEmail');
const connexionPassword=document.querySelector('#connexionInputPassword');
const inscriptionEmail=document.querySelector('#inscriptionInputEmail');
const inscriptionPassword=document.querySelector('#inscriptionInputPassword');
const inscriptionConfirm=document.querySelector('#inscriptionInputConfirmPassword');
console.log(detail,connexionEmail,connexionPassword,
    inscriptionEmail,inscriptionPassword,inscriptionConfirm); 

const regexObj = {
    regexMail : /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/,
    charDecimal : /\d/,
    charSpecial : /[$&@!]/,
    xssPattern:/<script.*?>.*?<\/script>|<.*?onclick=.*?>|<.*?on\w+=".*?"/i
};

// Submit
formConnexion.addEventListener('submit',(e)=>{e.preventDefault();})
formInscription.addEventListener('submit',(e)=>{e.preventDefault();})

// Email
function mail(erreur){
    let errorMsg = '';

    if(!erreur.value.match(regexObj.regexMail)){
        errorMsg+=`<li>⛔️ Le format du mail n'est pas correct</li>`;
    }
    if(erreur.value.match(regexObj.xssPattern)){
        errorMsg+=`<li>⛔️ Attention : potentiel XSS détecté</li>`;
    }
    // Updating color based on errors
    if (errorMsg) {
        erreur.style.backgroundColor = 'red';
    } else {
        erreur.style.backgroundColor = 'green';
    }
    detail.innerHTML=`<ul>${errorMsg}</ul>`;
}

// Password
function password(erreur){
    let errorMsg = '';

    if(erreur.value.length<6){
        errorMsg+=`<li>⛔️ Mot de passe trop Faible</li>`;
    }else if(erreur.value.length>12){
        errorMsg+=`<li>⛔️ Mot de passe trop Long</li>`;
    }
    if(!erreur.value.match(regexObj.charDecimal)){
        errorMsg+=`<li>⛔️ Le Mot de passe doit contenir 1 chiffre</li>`;
    }
    if(!erreur.value.match(regexObj.charSpecial)){
        errorMsg+='<li>⛔️ Le Mot de passe doit contenir un caractère spécial</li>';
    }
    if(erreur.value.match(regexObj.xssPattern)){
        errorMsg+=`<li>⛔️ Attention : potentiel XSS détecté</li>`;
    }
     // Updating color based on errors
     if (errorMsg) {
        erreur.style.backgroundColor = 'red';
    } else {
        erreur.style.backgroundColor = 'green';
    }
    detail.innerHTML=`<ul>${errorMsg}</ul>`;
}

// Password verification
function passwordConfirm(erreur){
    let errorMsg = '';
   
    if(inscriptionConfirm.value !== inscriptionPassword.value){
        errorMsg+='<li>⛔️ Les Mot de passe ne correspondent pas</li>';
    }
    if(inscriptionConfirm.value.match(regexObj.xssPattern)){
        errorMsg+=`<li>⛔️ Attention : potentiel XSS détecté</li>`;
    }
     // Updating color based on errors
     if (errorMsg) {
        erreur.style.backgroundColor = 'red';
    } else {
        erreur.style.backgroundColor = 'green';
    }
    detail.innerHTML=`<ul>${errorMsg}</ul>`;
};


connexionEmail.addEventListener('keyup',()=>{
    mail(connexionEmail);
});

inscriptionEmail.addEventListener('keyup',()=>{
    mail(inscriptionEmail);
});
connexionPassword.addEventListener('keyup',()=>{
    password(connexionPassword);
});

inscriptionPassword.addEventListener('keyup',()=>{
    password(inscriptionPassword);
});

inscriptionConfirm.addEventListener('keyup',()=>{
    passwordConfirm(inscriptionConfirm);
});
