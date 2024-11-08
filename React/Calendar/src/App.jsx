import './App.css'

const MONTH= ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre']
const DAY=['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche']

const DAY_LETTER=[]

{DAY.forEach(j=>DAY_LETTER.push(j[0]))}

function Day({jour,className}){
  return <div className={className}>
    {jour}
  </div>
}

function App() {
  const ROW=[]
  let count=0
  for(let i=1; i<=31;i++){
    ROW.push(<Day key={count++} jour={i} className={"backgroundOrange"}/>)
  }
  return <article className='card'>
    <Day jour={MONTH[9]} className={"month"} />
    <section className='grid-7'>
      {DAY_LETTER.map(j=><Day key={count++} jour={j} className={""} />)}
    </section>
    <section className='grid-7 days'>
      {ROW}
    </section>
  </article>
}

export default App