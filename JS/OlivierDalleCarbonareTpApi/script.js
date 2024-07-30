AOS.init();

const bt=document.querySelector('button');
const card=document.querySelector('.cardMeteo');
console.log(card,bt)

const info=document.createElement('div');
info.style.height='300px';
info.style.width='200px';
info.style.margin='16px 0';
info.style.border='3px solid gray';
info.style.padding='16px 12px 24px 12px';

bt.before(info);

const text=document.createElement('p');
function addInfo(temp){
    text.innerText=temp;
    info.append(text);
}

function bouton(){
    bt.classList.add('button__cardMeteo');
}

bt.addEventListener('mousedown',()=>{
    bt.style.backgroundColor='orange';
});
document.addEventListener('mouseup',()=>{
    bt.removeAttribute('style');
});

bt.addEventListener('click',()=>{
    const api= async()=>{
        const url= await fetch("https://prevision-meteo.ch/services/json/toulouse");
        const data=await url.json();
        console.log(data);
        let condition=`Aujourd'hui le temps est : ${data.current_condition.condition},`;
        let tempActuelle=` et la température est de ${data.current_condition.tmp},`;
        let tempMax=`°C T° Max = ${data.fcst_day_0.tmax}`;
        let tempMin=` - T° Min = ${data.fcst_day_0.tmin}`;
        let météo=condition+tempActuelle+tempMax+tempMin;
        console.log(météo);
        addInfo(météo);
    }
    api();
    bouton()
});
