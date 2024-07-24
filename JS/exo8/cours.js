// 1er exemple fetch api avec async await 
const apiDiv = document.querySelector('.apiContact');
//de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable
const contactApi =  async () => {
    //Data va récup Toutes les données de l'api
    const data = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
    console.log(data);
    //Plutôt que de Travailler sur la réponse, on va la transformé pour 
    //qu'elle devient un OBJET JS (+ pratique)
    const dataTransformed = await  data.json();
    console.log(dataTransformed);
    apiDiv.innerText = dataTransformed.latitude;
};
contactApi();

// le même exemple en utilisant .then( ).then( ).catch( )
// //** METHODE avec Fetch + .then() + catch() */
const divApi = document.querySelector('.apiContact');
console.log(divApi);
const apiContact = () => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m')
    .then(response => response.json())
    .then(data =>(divApi.innerText = data.latitude))
    .then(data =>(console.log(data)))
    .catch(error => console.log("Erreur custom : " + error));
};
apiContact();

// un troisième exemple avec un peu plus de gestion d'erreur 
//** METHODE avec Fetch +then + catch + async Await */
const contactApi3 = () => {
    //! tester si jamais on se trompe dans l'url (mettre l'un des 2 fetch en commentaire) 
fetch("https://api.npms.io/on-s-est-trompe-dans-l-url")
//! Ci dessous avec une url valide
// fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m")
    .then(async (response) => {
    const dataTransformed = await response.json();
    // Ici on gère aussi les erreurs au niveau de la
    // réponse de l'api
    //  Si dans la response la propriété ok n’est pas définie  
    if (!response.ok) {
        // on récupère les messages d'erreur ou la propriété statusText par default de la response 
        const error = (dataTransformed && dataTransformed.message) || response.statusText;
        //ƒ° native de JS utilisé sur les objets de type Promise
        return Promise.reject(error);
    }
    
    apiDiv.innerText = dataTransformed.latitude;
    })
    .catch((error) => {        
    console.log(error);
    // Ici on crée une error custom et l'objet error
    console.error("Attention une fusée à décollée depuis Grenoble", error);
    });
};
contactApi3();