function Template({children}){
    return <>
        <header>
            <nav >
                <ul style={{listStyle:"none",display:"flex", justifyContent:"space-evenly"}}>
                    <li ><a href="">Accueil</a></li>
                    <li><a href="">Plus</a></li>
                </ul>
            </nav>
            <h1>Titre</h1>
            <img src="https://picsum.photos/200" alt="Img aléatoire" />
        </header>
        <main>
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