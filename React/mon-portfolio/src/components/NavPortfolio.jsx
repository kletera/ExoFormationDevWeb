import {NavLink } from "react-router-dom";

function NavPortfolio(){
    return <nav style={{display:"flex", justifyContent:"space-evenly"}}>
        <NavLink to={'/portflio/carduser'}>CardUser</NavLink>
        <NavLink to={'/portflio/calendar'} >Calendar  </NavLink>
        <NavLink to={'/portflio/todolist'}>ToDoList</NavLink>
    </nav>
}

export default NavPortfolio