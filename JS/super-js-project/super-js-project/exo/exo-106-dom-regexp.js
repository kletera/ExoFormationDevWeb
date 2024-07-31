const regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
const charDecimal = /\d/;
const charSpecial = /[$&@!]/;

const log=document.querySelector('#exampleInputEmail1');
const pass=document.querySelector('#exampleInputPassword1');
const liste=document.querySelector('#userMessage');
console.log(log,pass,liste)
const p=document.createElement('p');
const l1=document.createElement('li');
const l2=document.createElement('li');
const l3=document.createElement('li');

log.addEventListener('keyup',()=>{
    if(regex.test(log.value)!=true){
        log.style.background='red'
    }else{
        log.style.background='green';
    }
    console.log(regex.test(log.value));
});

passwordInput.addEventListener('keyup',()=>{
    const charDecimal = /\d/;
    const charSpecial = /[$&@!]/;
    let errorMessage ='';
    // Si MDP <6 alors dans errormessage on cumule une <li></li> (trop court)
    // Sinon Si MDP >8 alors dans errormessage on cumule une <li></li> (trop long)
    // Si la value du passWord ne match pas la regex decimale alors on cumule une <li></li> (faut un chiffre)
    // etc ... meme système pour les autres cas 
    // On peut aussi faire un truc genre si erroMessage est vide alors c'est tout bon 
    if(passwordInput.value.length<6){
      errorMessage+='<li>Le Mot de passe trop COURT</li>'
    }
    else if(passwordInput.value.length>8){
      errorMessage+='<li>Le Mot de passe trop LONG</li>'
    }
  
    if(!passwordInput.value.match(charDecimal)){
      errorMessage+='<li>Le Mot de passe doit contenir 1 chiffre</li>'
    }
    if(!passwordInput.value.match(charSpecial)){
      errorMessage+='<li>Le Mot de passe doit contenir 1 caractère spécial (@,&,!,$,)</li>'
    }
    if(errorMessage!==''){
      userMessage.innerHTML = `le mot de passe est : <ul>${errorMessage}</ul>`;
      userMessage.style.border ='5px solid red'
    }
    else{
      userMessage.innerHTML = 'Le mot de passe est valide ! 👍';
      userMessage.style.border ='5px solid green'
    }
  });