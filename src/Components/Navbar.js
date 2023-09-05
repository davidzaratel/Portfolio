import React from 'react'
import { useState } from 'react'
import {LeftContainer, NavBarLink, NavBarLinkExtended, NavbarContainer, NavbarExtendedContainer, NavbarInnerContainer, NavbarLinkContainer, OpenLinkButton, RightContainer} from '../Styles/Navbar.style'

function Navbar() {
  const [extendedNavbar, setExtendedNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendedNavbar}>
        <NavbarInnerContainer>
            <LeftContainer>
                <NavbarLinkContainer>
                    <NavBarLink to="/">Home</NavBarLink>
                    <NavBarLink to="/about">About</NavBarLink>
                    <NavBarLink to="/projects">Projects</NavBarLink>
                    <NavBarLink to="/experience">Experience</NavBarLink>
                    <OpenLinkButton 
                    onClick= {() => {
                        setExtendedNavbar((curr) => !curr);
                    }} 
                    >
                        {extendedNavbar ? <>&#10005;</> : <>&#8801;</>}
                    </OpenLinkButton>
                </NavbarLinkContainer>
            </LeftContainer>
            <RightContainer>
                <NavBarLink to="/">David Zarate Lopez</NavBarLink>
            </RightContainer>
        </NavbarInnerContainer>
       { extendedNavbar &&
       
       <NavbarExtendedContainer>
            <NavBarLinkExtended to="/">Home</NavBarLinkExtended>
            <NavBarLinkExtended to="/about">About</NavBarLinkExtended>
            <NavBarLinkExtended to="/projects">Projects</NavBarLinkExtended>
            <NavBarLinkExtended to="/experience">Experience</NavBarLinkExtended>
        </NavbarExtendedContainer>}
    </NavbarContainer>
  )
}

export default Navbar