// Ajout dans le sytle du html disNone
// Swich toggle
const connexion=document.querySelector('#connexionForm');
const inscription=document.querySelector('#inscriptionForm');
const swich=document.querySelector('#flexSwitchCheckDefault');
console.log(connexion,inscription,swich);
inscription.classList.toggle('disNone');

swich.addEventListener('click',()=>{
    console.log(swich.checked);
    if(swich.checked!='true'){
        connexion.classList.toggle('disNone');
        inscription.classList.toggle('disNone');
    }else{
        connexion.classList.toggle('disNone');
        inscription.classList.toggle('disNone');
    }
});

// Formulaire
const detail=document.querySelector('#securityInfo');
const connexionEmail=document.querySelector('#connexionInputEmail');
const connexionPassword=document.querySelector('#connexionInputPassword');
const inscriptionEmail=document.querySelector('#inscriptionInputEmail');
const inscriptionPassword=document.querySelector('#inscriptionInputPassword');
const inscriptionConfirm=document.querySelector('#inscriptionInputConfirmPassword');
console.log(detail,connexionEmail,connexionPassword,inscriptionEmail,inscriptionPassword,inscriptionConfirm); 

detail.style.display='block';

// Email
function mail(erreur){
    let errorMsg = '';
    const regexObj = {
        regexMail : /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/,
        charDecimal : /\d/,
        charSpecial : /[$&@!]/,
        xssPattern:/<script.*?>.*?<\/script>|<.*?onclick=.*?>|<.*?on\w+=".*?"/i
    };
    if(!erreur.value.match(regexObj.regexMail)){
        erreur.style.backgroundColor='red';
        errorMsg+=`<li>Le format du mail n'est pas correct</li>`;
    }else{
        erreur.style.backgroundColor='green';
        errorMsg='';
    }
    if(erreur.value.match(regexObj.xssPattern)){
        erreur.style.backgroundColor='red';
        errorMsg+=`<li>Attention : potentiel XSS détecté</li>`;
    }
    detail.innerHTML=`<ul>${errorMsg}</ul>`;
}

connexionEmail.addEventListener('keyup',()=>{
    mail(connexionEmail);
});

inscriptionEmail.addEventListener('keyup',()=>{
    mail(inscriptionEmail);
});

// Password
function password(erreur){
    let errorMsg = '';
    const regexObj = {
        regexMail : /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/,
        charDecimal : /\d/,
        charSpecial : /[$&@!]/,
        xssPattern:/<script.*?>.*?<\/script>|<.*?onclick=.*?>|<.*?on\w+=".*?"/i
    };
    if(erreur.value.length<6){
        errorMsg+=`<li>Mot de passe trop Faible</li>`;
    }else if(erreur.value.length>12){
        errorMsg+=`<li>Mot de passe trop Long</li>`;
    }
    if(!erreur.value.match(regexObj.charDecimal)){
        errorMsg+=`<li>Le Mot de passe doit contenir 1 chiffre</li>`;
    }
    if(!erreur.value.match(regexObj.charSpecial)){
        errorMsg+='<li>Le Mot de passe doit contenir un caractère spécial</li>';
    }
    if(erreur.value.match(regexObj.xssPattern)){
        errorMsg+=`<li>Attention : potentiel XSS détecté</li>`;
    }
    detail.innerHTML=`<ul>${errorMsg}</ul>`;
}

connexionPassword.addEventListener('keyup',()=>{
    password(connexionPassword);
});

inscriptionPassword.addEventListener('keyup',()=>{
    password(inscriptionPassword);
});

// Password verification
inscriptionConfirm.addEventListener('keyup',()=>{
    let errorMsg = '';
    const regexObj = {
        regexMail : /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/,
        charDecimal : /\d/,
        charSpecial : /[$&@!]/,
        xssPattern:/<script.*?>.*?<\/script>|<.*?onclick=.*?>|<.*?on\w+=".*?"/i
    };
    if(!inscriptionConfirm.value.match(inscriptionPassword.value)){
        errorMsg+='<li>Les Mot de passe ne correspondent pas</li>';
    }
    if(inscriptionConfirm.value.match(regexObj.xssPattern)){
        errorMsg+=`<li>Attention : potentiel XSS détecté</li>`;
    }
    detail.innerHTML=errorMsg;
});

// Submit
formCOnnexionUI.addEventListener('submit',(e)=>{
    e.preventDefault();
})
formInscriptionUI.addEventListener('submit',(e)=>{
    e.preventDefault();
})