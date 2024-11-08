import './Card.css'
import { useState } from 'react'

function Like(){
    let nbLike=42
    const [like,setLike]=useState(nbLike)
  
    function handleClick(event){
      event.target.classList.toggle('like')
      if(event.target.classList.contains('like')){
        setLike(like+1)
      }else{
        setLike(like-1)
      }
    }
  
    return <div onMouseOver={event => event.stopPropagation()}>
      <div className='rond' onClick={(event)=>handleClick(event)} onMouseOver={event => event.stopPropagation()}>
        {like} Like
      </div>
    </div>
  }

function Card({user}){
    let color=""
    if(user.sexe=="homme"){
        color="lightblue"
    }else if(user.sexe=="femme"){
        color="pink"
    }else{
        color="lemonchiffon"
    }

    function addBorder(event){
        event.target.classList.add("border")
    }
    function removeBorder(event){
        event.target.classList.remove("border")
    }
    
    return <article className="card" style={{backgroundColor:color}} onMouseOver={addBorder} onMouseLeave={removeBorder}>
        <img onMouseOver={event => event.stopPropagation()} src={user.image} alt="avatar" />
        <h2 onMouseOver={event => event.stopPropagation()}>{user.pseudo}</h2>
        <h3 onMouseOver={event => event.stopPropagation()}>{user.email}</h3>
        <p onMouseOver={event => event.stopPropagation()}>{user.descrition}</p>
        <Like />
    </article>
}
export default Card