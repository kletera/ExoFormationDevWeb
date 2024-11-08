import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

const USER1 ={
  image:"https://picsum.photos/200",
  pseudo:"Rémi",
  email:"remi@yoyo.com",
  descrition:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita totam fuga ipsam veniam corrupti fugiat, nisi suscipit fugit accusantium numquam consectetur earum nostrum obcaecati excepturi sapiente corporis dolor ipsum. Voluptates!",
  sexe:'femme',
}
const USER2 ={
  image:"https://fr.web.img3.acsta.net/pictures/19/11/20/20/28/5153076.jpg",
  pseudo:"Diablo",
  email:"eldiablo@satana.com",
  descrition:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita totam fuga ipsam veniam corrupti fugiat, nisi suscipit fugit accusantium numquam consectetur earum nostrum obcaecati excepturi sapiente corporis dolor ipsum. Voluptates!",
  sexe:'non-binaire',
}
const USER3 ={
  image:"https://m.media-amazon.com/images/I/71TPBeL35pL._AC_UF1000,1000_QL80_.jpg",
  pseudo:"Jeusus",
  email:"jesus@yoyo.com",
  descrition:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita totam fuga ipsam veniam corrupti fugiat, nisi suscipit fugit accusantium numquam consectetur earum nostrum obcaecati excepturi sapiente corporis dolor ipsum. Voluptates!",
  sexe:'homme',
}

const USER=[USER1,USER2,USER3]


function App() {
  let count=0
  const [search,setSearch]= useState('')

  const USERS_LIST= USER.filter(element=>{
    if(!element.pseudo.includes(search)){
      return false
    }else{
      return true
    }
  })

  if(USER.length>0){
    return <>
    <h1>Liste des Utilisateurs</h1>
    {USER.length>0 && <p>il y a {USER.length} utilisateurs inscrits !</p>}
    <input type="text" onChange={event=>setSearch(event.target.value)} />

    {USERS_LIST.map(user=> <Card key={count++} user={user}/>)}
    </>
  }else{
    return <h1>Aucun utilisateur d’inscrit</h1>    
  }
}
export default App
