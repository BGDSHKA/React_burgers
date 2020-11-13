import React from 'react'
import { Nav, NavIcon, NavLink, Bars } from './NavBarElements'


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Burgers</NavLink>
                <NavIcon>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
