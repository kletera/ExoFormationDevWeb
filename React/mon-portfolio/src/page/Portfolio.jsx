import { Outlet } from "react-router-dom"
import NavPortfolio from "../components/NavPortfolio"

function Portfolio(){
    return <>
    <h1>Portfolio</h1>
    <NavPortfolio/>
    <Outlet/>
    </>
}

export default Portfolio