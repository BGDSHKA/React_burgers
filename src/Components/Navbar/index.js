import React from 'react'
import { Nav, NavIcon, NavLink, Bars } from './NavBarElements'


const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Royal Burgers</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
