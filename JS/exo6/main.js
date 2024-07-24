const titre=document.querySelector('h1');

// titre.addEventListener("click",()=>{titre.innerText="--🥶--"});

titre.addEventListener("click",()=>{
    if(document.querySelector('h1')!="--🥶--"){
        titre.innerText="--🥶--";
    }else{
        titre.innerText="D.O.M Events";
    }
    
});
console.log(titre);

console.log("----------");

const t=document.querySelector('h1');
const ajouter=document.querySelector('a');
const suprimer=document.querySelectorAll('a')[1];
const toggle=document.querySelectorAll('a')[2];
console.log(t,ajouter,suprimer,toggle);

ajouter.addEventListener("click",function(){
    t.classList.add("laClasse");
});

suprimer.addEventListener("click",()=>{
    t.classList.remove("laClasse");
});

toggle.addEventListener("click",()=>{
    t.classList.toggle("laClasse");
});

console.log("------------");

document.addEventListener("click",function(ici){
    console.log(ici.x,ici.y);
    let x=ici.clientX;
    let y=ici.clientY;
    const img=document.createElement('img');
    img.src="https://picsum.photos/200/300";
    img.style.position="absolute";
    img.style.left=`${x}px`;
    img.style.top=`${y}px`;
    document.body.append(img);    
});