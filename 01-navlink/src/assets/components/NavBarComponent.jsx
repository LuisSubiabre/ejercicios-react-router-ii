import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBarComponent = () => {

    const setActiveClass = ({ isActive }) => (isActive ? "active" : "no-active");
    return (
        <div>
            <NavLink className={setActiveClass} to="/">Home</NavLink>
            {" - "}
            <NavLink className={setActiveClass} to="/personajes">Personajes</NavLink>
        </div >
    )
}

export default NavBarComponent