
//de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable
// const contactApi =async ()=>{
//     //Data va récup Toutes les données de l'api
//     const data =await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
//     console.log(data);
//     //Plutôt que de Travailler sur la réponse, on va la transformé pour 
//     //qu'elle devient un OBJET JS (+ pratique)
//     const dataTransformed = await data.json();
//     console.log(dataTransformed);
//     apiDiv.innerText = dataTransformed.latitude;
// };
// contactApi();


// const apiPokemon=async()=>{
//     const data= await fetch("https://pokeapi.co/api/v2/pokemon");
//     console.log(data);
//     const dataTransformed=await data.json();
//     console.log(dataTransformed);
//     console.log(dataTransformed.results[0].name);
//     for(let i=0;i<20;i++){
//         const p=document.createElement('p');
//         p.innerText=dataTransformed.results[i].name;
//         apiDiv.append(p);
//     }
// }
// apiPokemon();
// apiDiv.style.backgroundColor="yellow";
const apiDiv=document.querySelector('.apiContact');
const apiHearstone=async()=>{
    const url = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '6b90e78cd8msh908d09eb1199d36p1a9c7fjsnf7763fa1655b',
            'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
        }
    }
    const response = await fetch(url, options);
    console.log(response);
    const result = await response.json();
    console.log(result);
    for(let i=0; i<result.classes.lenght;i++){
        const p=document.createElement('p');
        p.innerText=results.classes[i]; 
        apiDiv.append(p);
    }
}

apiHearstone();

const chunk=document.querySelector('.apiCunk');
const apiChunk=async()=>{
    const url=await fetch('https://api.chucknorris.io/jokes/random');
    const transform=await url.json();
    console.log(url);
    console.log(transform);
}
apiChunk();