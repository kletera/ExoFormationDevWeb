// let leH1 = document.querySelector('#mainTitle');
// let selectTitle = false;    //! Un booléen pour savoir si le titre a été cliqué ou non

// leH1.addEventListener('click',()=>{
//     console.log('ok ca click');
//     leH1.innerText ='-- 🥳 --'; //? condition ternaire si selectTitle est vrai alors smiley sinon dom Events
// });

// leH1.addEventListener('click',()=>{
//     console.log('ok ca click');
//     leH1.innerText = selectTitle ? '-- 🥳 --':'D.O.M Events'; //? condition ternaire si selectTitle est vrai alors smiley sinon dom Events
//     selectTitle = !selectTitle; // ? à chaque click le booléen passe à son inverse (pour faire le re click)
// });

//! EXO 24 - ClassList 
// ** addEventListener - classList.add() - classList.remove() - classList.toggle()
// En CSS on crée une classe maCouleur (vous modifiez ce que vous voulez)
// TODO 1: récupérer le titre dans une variable leTitre
// TODO 2: récupérer tous les liens dans une variable lesLiens
// TODO 3-1: Sur le 1er lien placer un addEventListener qui écoute le "click" et éxecute une fonction
// TODO 3-2: Dans cette fonction on ajoute la classe "maCouleur" sur titre
// TODO 4-1: Sur le 2e lien placer un addEventListener qui écoute le "click" et éxecute une fonction
// TODO 4-2: Dans cette fonction on supprime la classe "maCouleur" sur titre
// TODO 4-1: Sur le 3e lien placer un addEventListener qui écoute le "click" et éxecute une fonction
// TODO 4-2: Dans cette fonction on toggle la classe "maCouleur" sur titre


const leTitre = document.querySelector("#mainTitle");
const lesLiens = document.querySelectorAll(".superLien");
lesLiens[0].addEventListener("click", function(){
    leTitre.classList.add("laClasse");
});    
lesLiens[1].addEventListener("click", function(){
    leTitre.classList.remove("laClasse");
});
lesLiens[2].addEventListener("click", function(){
    leTitre.classList.toggle("laClasse");
});


// * Mini test pour capter event du Clavier
// document.addEventListener('keyup', function(eventClavier){
//     console.log('Yes Moi ECRIRE');
//     console.log(eventClavier);
//     console.log(eventClavier.key);
// });

// * Mini test pour capter event du Click
document.addEventListener('click', function(unEvent){
    console.log('Yes Moi Clicker');
    console.log(unEvent);
    console.log('coordX du Click',unEvent.x);
    console.log('coordy du Click',unEvent.y);
});

//!------------REAGIR AUX EVENT DU DOM KEYUP créer img au coordonnées du click (capter les events)--------------
// TODO 1: sur document, placer un addEventListener qui écoute le "click" et éxecute une fonction qui a unEvent en paramètre
// TODO 2: Dans cette fonction on console log unEvent 
// TODO 3: à partir du console log retrouver les propriétés de unEvent qui correspondent au coordonnées du click
// TODO 4: Tjrs dans la Fonction dans addEventListener, dans une variable monImg, créer une img html
// TODO 5: Ensuite, modifier l'attribut src de monImg (url de l'img au choix)
// TODO 6: sur monImg, modifier dans style, la position en "absolute"
// TODO 7: sur monImg, modifier dans style, le left, on assigne la coordonnées x du click
// TODO 8: sur monImg, modifier dans style, le top, on assigne la coordonnées y du click
// TODO 9: placer monImg dans la page
// document.addEventListener('click', function(eventClick){
//     console.log(eventClick);
//     console.log('Les coord : ',eventClick.x, eventClick.y);
//     // On Créer une image
//     const monImg = document.createElement('img');
//     const tailleImg = 50;
//     // On rajoute une src à l'image
//     // monImg.setAttribute('src', `https://www.stevensegallery.com/${tailleImg}/${tailleImg}`);
//     monImg.setAttribute('src', `https://picsum.photos/${tailleImg}/${tailleImg}`);
//     // On modifie le type de position de l'image
//     monImg.style.position = 'absolute';
//     // On modifie la position top de l'image
//     monImg.style.top = eventClick.y - tailleImg /2 +'px';
//     // On modifie la position left de l'image
//     monImg.style.left = eventClick.x -tailleImg /2 +'px';
//     //On place l'image fraichement créee dans le body de la page
//     document.body.append(monImg);
// });


/**
 *! **************************************
 *! FOCUS - BLUR
 *! **************************************
 */
//! EXO 24.3  addEventListener - focus - blur
// TODO 1: récupérer l'input dans une variable leInput
// TODO 2-1: sur leInput, utiliser addEventListener pour surveiller "focus" 
// TODO 2-2:et execute une fonction qui modif la bg color de leInput en (couleur au choix)
// TODO 3-1: sur leInput, utiliser addEventListener pour surveiller "blur"
// TODO 3-2: et execute une fonction qui modif la bg color de leInput en blanc ou transparent
const formTitleInput = document.querySelector('#titleInput');
console.log(formTitleInput);
// TEST avec FOCUS
formTitleInput.addEventListener("focus", function() {
    formTitleInput.style.backgroundColor = "royalBlue";
    formTitleInput.style.color = "white";
});
// TEST avec Blur
formTitleInput.addEventListener("blur", () => {
    formTitleInput.style.backgroundColor = "transparent";
    formTitleInput.style.color = "black";
});

/**
 *! **************************************
 *! LOAD
 *! **************************************
 */
//! EXO LOAD
// ** addEventListener - load
// TODO 1: récupérer toutes les images dans une variable lesImages
// TODO 2: Dans une variable tabImg on transforme lesImages en tableau avec Array.from()
// TODO 3-1: Sur tabImg on utilise la fonction map().
// TODO 3-2: Dans map(), on lui passe une F => qui prend 2 params : uneImage et index
// TODO 3-3: Dansla F =>, sur uneImage on place un addEventListener qui écoute "load" et éxecute une Fonction
// TODO 3-4: Dans la F du addEventListener, on affiche index en consoles
let lesImages = document.querySelectorAll(`img`);
console.log(lesImages);
let tabImg = Array.from(lesImages);
console.log(tabImg);
tabImg.map(function (uneImage, index) {
  uneImage.addEventListener("load", function () {
    console.log(`Image numéro : ${index} – vient de finir de charger.`);
  });
});

/**
 *! **************************************
 *! MOUSELEAVE
 *! **************************************
 */
// !EXO 24.2 addEventListener - "mouseout" - display
// addEventListener - "mouseout" - display
// TODO: EN CSS le titre H3 à un display à none
// TODO 1: Dans une variable monTitre, récupérer le titre h3
// TODO 2: Sur document, placer un addEventListener qui écoute "mouseout" et qui execute une fonction
// TODO 3: dans cette fonction, on va modifier dans le style de monTitre le display que l'on met à "block"
const h3Title = document.querySelector('#mouseOut');
console.log(h3Title);
document.body.addEventListener('mouseleave',()=>{
    //? Comme vu pour les objets on peux accèder aux propriétés dans l'objet style de l'element 
    h3Title.style.display = 'block';
    h3Title.style.color = 'red';
    h3Title.style.backgroundColor = 'chartreuse';
    h3Title.innerText = 'Ne PARTEZ PAS, vous venez de gagner 1 millions de Dollars';
    h3Title.style.textAlign = 'center';
});

/**
 *! **************************************
 *! SCROLL
 *! **************************************
 */
// ! Exo SCROLL
// ** addEventListener - capter un évènement "scroll" - scrollHeight  - innerHeight - scrollY
// TODO 1: Dans une variable laBar, récupérer la div qui possède la classe .bar
// TODO 2: Sur document, placer un addEventListener qui écoute "scroll" et execute une fonction
// TODO 3: dans cette fonction, on console log document.body.scrollHeight (la hauteur de page), innerHeight (hauteur de l'affichage) et scrollY (la position du scroll)
// TODO 4: Ensuite, dans une variable scrollMax, on soustrait à document.body.scrollHeight, innerHeight
// TODO 5: Dans une variable onEstOu, on fait un pourcentage de scrollY sur scrollMax
// TODO 6: Modifier dans le style de laBar, la width en lui assignant onEstOu en "%"
//On stock la div de laBar
// ** addEventListener - scroll 
const laBar = document.querySelector(".bar");
document.addEventListener("scroll", function (event) {
  console.log(event);
  //Le scrollMax = hauteur de la page - hauteur de affichage
  const scrollMax = document.body.scrollHeight - innerHeight;
  // On fait un pourcentage du scroll de l'utilisateur
  const onEstOu = (scrollY / scrollMax) * 100;
  //Enfin on assigne ce pourcentage de scroll
  //à la width(%) du style de la bar.
  laBar.style.width = onEstOu + "%";
    console.log(`
      Hauteur page : ${document.body.scrollHeight}
      Hauteur affichage : ${innerHeight}
      Scroll Position : ${scrollY}
      pourcentage de scroll :${onEstOu} %`);
});


//!------------KEYUP Editeur de texte--------------
// ** mini éditeur de texte - addEventListener - keyup - innerHTML
// TODO 1: récupérer le textarea dans une variable monTxt
// TODO 2: récupérer la div dans une variable rendu
// TODO 3-1: sur monTxt on place un addEventListener qui surveille le clavier et qui exécute une fonction
// TODO 3-2: Dans cette fonction, au innerHTML de rendu on assigne la VALEUR contenue dans monTxt
const monTxt = document.querySelector("textarea");
const rendu = document.querySelector("#renderTextEdit");

monTxt.addEventListener("keyup", function() {
    // rendu.innerHTML =marked(monTxt.value);
    // Version traduite en marked 
    rendu.innerHTML = marked(monTxt.value);
    // rendu.innerText = monTxt.value;
    //Dans le innerHtml on lui assigne la Value de ce que 
    //L'utilisateur tape dans le input / textarea
    // rendu.innerHTML = monTxt.value;
});

/**
 *! **************************************
 *! KEYUP
 *! **************************************
 */

//! EXO 24.4
// TODO 1: récupérer le textarea du formulaire dans une variable txt
// TODO 2: récupérer le button du formulaire dans une variable btn
// TODO 3-1: Sur txt placer un addEventListener qui écoute les touches clavier "keyup" et éxecute une fonction
// TODO 3-2: Dans cette fonction, si ce qu'on tape dans l'input (sa valeur) dépasse 5 caractères alors on désactive le button 
const monTextArea = document.querySelector('#formMessage');
const monBtn = document.querySelector('#formSubmitBtn');
console.log(monTextArea);
console.log(monBtn);

monTextArea.addEventListener('keyup',(event)=>{
    console.log(event);
    // ? Mode cond ternaires
    monBtn.disabled = monTextArea.value.length>=5 ? true : false;
    // ? Mode IF classique 
    // if(monTextArea.value.length>=5){
    //    monBtn.disabled = true;
    // }
    // else{
    //     monBtn.disabled = false
    // }
});


// *! **************************************
// *! LOCAL STORAGE
// *! **************************************
// TODO 1: récupérer le textarea dans une variable monTxt
// TODO 2: récupérer la div dans une variable rendu
// TODO 3: à la valeur contenue dans monTxt on assigne localStorage, sur localStorage on utilise la fonction getItem("monSuperTexte")
// TODO 4-1: ensuite, SI la valeur dans monTxt est définie,
// TODO 4-2: alors on assigne au innerHTML de rendu, localStorage sur lequel on utilise la fonction getItem("monSuperTexte")
// TODO 5-1: (en dehors du IF)Sur monTxt on place un addEventListener qui surveillle le clavier et exécute une fonction
// TODO 5-2: Dans cette fonction, sur localStorage on utilise la fonction setItem
// TODO 5-3: setItem() prend en 1er param "monSuperTexte", et en 2e param la valeur contenue dans monTxt
// TODO 5-4: on assigne au innerHTML de rendu la valeur contenue dans monTxt 
const zoneTxt = document.querySelector("textarea");
const zoneRender = document.querySelector("#formRender");
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











