//! EXO 20.1 
//TODO: via JS afficher le profil  utilisateur dans la page web
const userData = {
    name: 'John delavega',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true,
    img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
  };
  
console.log(userData);
document.body.style.display="flex";
document.body.style.justifyContent="center";
document.body.style.flexDirection="column";
const userProfile=document.querySelector("div");
userProfile.style.background="linear-gradient(30deg, pink, darkblue, yellow)";
userProfile.style.color="white";
userProfile.style.display="flex";
userProfile.style.flexDirection="column";


const Newimg=document.createElement('img');
Newimg.src=userData.img;
userProfile.append(Newimg);
Newimg.style.height="60%";
Newimg.style.margin="auto";

const titre=document.createElement('h1');
titre.innerText=userData.name;
userProfile.append(titre);

function text(){
  for(let i in userData){
    if(i!="name" && i!="img"){
      const paragraphe=document.createElement('p');
      paragraphe.innerText=userData[i];
      userProfile.append(paragraphe);
    }
  }
}
text();

console.log("------------");
const article=document.createElement('article');
document.body.append(article);

function ajouterTexte(pseudo,duTexte){
  const p=document.createElement('p');
  p.innerText=`${pseudo} - ${duTexte}`;
  article.append(p);
}
ajouterTexte('Daniel','Gracia');
