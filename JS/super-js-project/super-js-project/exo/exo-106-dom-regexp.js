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
pass.addEventListener('keyup',()=>{
    if(pass.value.match(charDecimal)!=null && pass.value.match(charSpecial)!=null && pass.value.length>6 && pass.value.length<8){
        liste.style.border='2px solid green';
        p.innerText=`Le password est valide`;
        liste.append(p);
    }
    else{
        liste.style.border='2px solid red';
        p.innerText=`Le password est:`;
        l1.innerText=`trop court`;
        l2.innerText=`doit contenir un chifre`;
        l3.innerText=`doit contenir un caractère spécial $,&,@ ou !`;
        liste.append(p,l1,l2,l3);
        
    }
    console.log(pass.value.match(charDecimal));
    console.log(pass.value.length);
});