
const input=document.querySelectorAll('input');
console.log(input[0],input[1],input[2]);

function déco(m){
    m.style.width="40%"

    m.addEventListener('focus',()=>{
        m.style.backgroundColor="blue";
        m.style.color="white"
    })
    m.addEventListener('blur',()=>{
        m.style.backgroundColor="transparent";
        m.style.color="black"
    })

}
déco(input[0]);
déco(input[1]);
déco(input[2]);

console.log("-----------");
const card=document.querySelectorAll('.card');
const h=document.querySelectorAll('h5');
console.log(card,h);


const img=document.querySelectorAll('img');
console.log(img);

const imgArr=Array.from(img);
console.log(imgArr);

imgArr.map((image,index)=>{image.addEventListener('load',()=>{
    console.log(`Image numéro: ${index} - vien de finir de charger`)
})});

console.log("-----------");
const win=document.querySelector("#mouseOut");

document.addEventListener('mouseleave',()=>{
    win.style.display='block';
    win.style.backgroundColor='green';
    win.style.color='red';
    win.style.textAlign='center';
})
document.addEventListener('mouseenter',()=>{
    win.style.display='none';
    win.style.backgroundColor='transparent';
    win.style.color='black';
    win.style.textAlign='center';
});

for(let i=0; i<card.length; i++){
    card[i].style.border="1px solid black";
    card[i].style.borderRadius="10px"
    card[i].style.margin="10px";
    h[i].style.textAlign='center';
    img[i].style.borderRadius="10px 10px 0 0 "
}
console.log("-------------");

console.log(`
    Hauteur page : ${document.body.scrollHeight}
    Hauteur affichage : ${innerHeight}
    Scroll Position : ${scrollY}`
);

document.addEventListener("scroll",()=>{
    let scrollMax=document.body.scrollHeight-innerHeight;
    let onEstOu = (scrollY /scrollMax)*100 ;
    let bar=document.querySelector('.bar');
    bar.style.width=onEstOu+'%';
});

console.log("-------------");

const txtarea=document.querySelector('textarea');
const p=document.querySelector('p');
console.log(txtarea,p)

txtarea.addEventListener('keypress', (event)=>{
    console.log(event);
    p.innerText= txtarea.value;
})
console.log(txtarea.value.length)    

console.log("-------------");

const bt=document.querySelector('button');
console.log(bt.disabled);

txtarea.addEventListener('keypress', (event)=>{
    console.log(event);
    if(txtarea.value.length>=5){
        bt.disabled=false;
    }else{
        bt.disabled=true;
    }
})

console.log("-------------");
const zoneTxt = document.querySelector("textarea");
const zoneRender = document.querySelector("p");
//On va pré remplir le textarea avec ce que l'on récupère dans le localStorage
zoneTxt.value = localStorage.getItem('monSuperTexte');
//Si zoneTxt.value est définit alors on rempli la Div avec ce qu'on récupère dans le local storage
if(zoneTxt.value){
    zoneRender.innerText = localStorage.getItem('monSuperTexte');
};
//On détecte ce que tape l'utilisateur dans le textarea
zoneTxt.addEventListener("keyup", function() {
//On enregistre ce que tape l'utilisateur dans le localStorage sous le nom "monSuperTexte"
    localStorage.setItem('monSuperTexte',zoneTxt.value);
//On affiche ce que tape l'utilisateur traduit en marked dans la div     
   // zoneRender.innerHTML =marked(zoneTxt.value);
    zoneRender.innerHTML =marked(zoneTxt.value);
});