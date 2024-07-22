
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
for(let i=0; i<card.length; i++){
    card[i].style.border="1px solid black";
    card[i].style.margin="10px";
    h[i].style.textAlign='center';
}

const img=document.querySelectorAll('img');
console.log(img);

const imgArr=Array.from(img);
console.log(imgArr);

imgArr.map((image,index)=>image.addEventListener('load',()=>{
    console.log(`Image numéro: ${index} - vien de finir de charger`)
}));

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
})
