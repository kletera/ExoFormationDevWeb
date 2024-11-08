import { useState } from 'react'
import './App.css'
import './components/Template'
import Template from './components/Template'

const TODOS=[
  {todo:"Tennis",date:"05/11/2024",checked: true,heure:2, categorie:"air"},
  {todo:"Foot",date:"09/11/2024",checked: false,heure:1, categorie:"feu"},
  {todo:"Surf",date:"01/12/2024",checked: true,heure:5, categorie:"eau"}
]

function ToDo({todo,date,checked,heureRestante}){
  const [heure,setHeure]=useState(heureRestante)
  function handleClickMinus(){
    if(heure>0){
      setHeure(heure-1)
    }
  }
  function handleClickPlus(){
    setHeure(heure+1)
  }
  function handleClick(){
    // alert(todo)
  }
  if(checked){
    return <li className='green' onClick={handleClick}>
        <button onClick={handleClickMinus}>-</button>
        <button onClick={handleClickPlus}>+</button>
        <input type="checkbox" name="" id="" defaultChecked/>{todo} - {date} Heure Restante: {heure}h
      </li>

  }
  return <li className='orange' onClick={handleClick}>
      <button onClick={handleClickMinus}>-</button>
      <button onClick={handleClickPlus}>+</button>
      {todo} - {date} Heure Restante: {heure}h
    </li>
}

function TodoTernaire({todo,date,checked}){
  return checked ? <li className='green' onClick={handleClick}><input type="checkbox" name="" id="" defaultChecked/>{todo} - {date}</li> : <li className='orange'>{todo} - {date}</li>
}

function TodoAnd({todo,date,checked}){
  return <li onClick={handleClick}>{todo} - {date}{checked && <input type="checkbox" name="" id="" defaultChecked/>} </li>
}

function Form({onSubmit}){
  function handleChange(event){
    console.log(event.target.value)
  }
  return <>
  <form action="" onSubmit={onSubmit}>
    <input type="text" placeholder='La ToDo' onChange={(event)=>handleChange(event)}/>
    <input type="text" placeholder='La Date'onChange={(event)=>handleChange(event)}/>
    <input type="submit" value="Soumetre"/>
  </form>
  </>
}

function Form2(){
  // TODOS.push(checked,todo,date,heure,categorie)

  return <form>
    <input type="checkbox" name='checked'/>
    <input type="text" placeholder='todo' name='todo'/>
    <input type="text" placeholder='date' name='date'/>
    <input type="number" placeholder='heure' name='heure'/>
    <input type="text" placeholder='categorie' name='categorie'/>
    <input type="submit" value="Ajouter"/>
  </form>
}


function App() {
  const DATE = new Date()
  let count=0
  
  const [air, setAir] = useState( true )
  const [feu, setFeu] = useState( true )
  const [eau, setEau] = useState( true )

  const TODOLIST=TODOS.filter(element=>{
    if(element.categorie == 'air' && !air == true ){ 
      return false
    }else if(element.categorie == 'feu' && !feu == true ){ 
      return false
    }else if(element.categorie == 'eau' && !eau == true ){ 
      return false
    }
    else{
      return true
    }
  })

  function handleSubmit(event){
    event.preventDefault()
    const INPUTS=document.querySelectorAll(input[type='text']);
    console.log(INPUTS)
    INPUTS.forEach(input=>console.log(input.value))
  }

  return <>
    <Template>
      <h1>Ma Super ToDo List</h1>
      <h2>{DATE.toLocaleString()}</h2>
      
      <section>
        <input type="checkbox" name='air' checked={air} onChange={()=>setAir(!air)}/><label>air</label>
        <input type="checkbox" name='feu' checked={feu} onChange={()=>setFeu(!feu)}/><label>feu</label>
        <input type="checkbox" name='eau' checked={eau} onChange={()=>setEau(!eau)}/><label>eau</label>
      </section>
      <ul>
        {TODOLIST.map((element)=> <ToDo key={count++} todo={element.todo} date={element.date} checked={element.checked} heureRestante={element.heure} />)}
      </ul>
      {console.log(TODOLIST)}
      <Form onSubmit={(event)=>handleSubmit({event})}/>
      <Form2/>
    </Template>
  </>

}

export default App
