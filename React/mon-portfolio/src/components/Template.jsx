function Template({children}){
    return <>
        <main>
            <h1>ToDoList</h1>
            <img src="https://picsum.photos/200" alt="Img aléatoire" />
            {children}
        </main>
        <footer>
            <ul style={{listStyle:"none",display:"flex", justifyContent:"space-evenly"}}>
                <li><a href="">Mention légale</a></li>
                <li><a href="">Politique de confidentialiter</a></li>
            </ul>
        </footer>
    </>
}
export default Template