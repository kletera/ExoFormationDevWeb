let firstLink = document.querySelector('a');
console.log(firstLink);
let allLinks = document.getElementsByTagName('a');
console.log(allLinks);

let firstTitle = document.querySelector('h1');
console.log(firstTitle);

let firstImg = document.querySelector('img');
console.log(firstImg);

firstTitle.style.backgroundColor = 'blue';
firstTitle.style.color = 'beige';
// On accède directement aux porpiétés de l'objet qui correspondent aux attributs HTML
firstTitle.className = 'laClasse';
firstLink.href = 'https://www.google.com';
firstImg.src = 'https://picsum.photos/200/300';

// On a une fonction native pour modifier n'importe quel attribut
firstTitle.setAttribute('class','laClasse');
firstTitle.setAttribute('bidule','toto');
firstLink.setAttribute('href','https://www.googlllllle.com');
firstImg.setAttribute('src','https://picsum.photos/200/300');
firstImg.setAttribute('alt','une super img');