const profil=document.querySelector('div');
console.log(profil);
const apiProfil=()=>{
    fetch('https://randomuser.me/api/')
    .then(url=>url.json())
    .then(data=>{
        console.log(data);
        console.log(data.results[0].picture.medium);
        const img=document.createElement('img');
        img.src=data.results[0].picture.medium;
        profil.append(img);

        const nom=document.createElement('h1');
        nom.innerText=`${data.results[0].name.title} ${data.results[0].name.last} ${data.results[0].name.first}`;
        profil.append(nom);

        const mail=document.createElement('p');
        mail.innerText=data.results[0].email;
        profil.append(mail);

        const num=document.createElement('p');
        num.innerText=data.results[0].phone;
        profil.append(num);

        const adresse=document.createElement('p');
        adresse.innerText=`${data.results[0].location.postcode} - ${data.results[0].location.city} (${data.results[0].location.country} - ${data.results[0].location.state})`;
        profil.append(adresse);
    });
}
apiProfil();

const apiProfil2=()=>{
    fetch('https://randomuser.me/api/')
    .then(url=>url.json())
    .then(data=>{
        console.log(data);
        const tabData=Array.from(data.results[0]);
        console.log(tabData);
    });
}
apiProfil2();