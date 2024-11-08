import {NavLink } from "react-router-dom";

function MainNav(){
    return <nav style={{display:"flex", justifyContent:"space-evenly"}}>
        <NavLink to={'/'}>Accueil</NavLink>
        <NavLink to={'/portflio'} >Portfolio </NavLink>
        <NavLink to={'/contact'}>Contact</NavLink>
    </nav>
}

export default MainNav