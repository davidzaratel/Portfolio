import React from 'react'
import { useState } from 'react'
import {LeftContainer, NavBarHomeLink, NavBarLink, NavBarLinkExtended, NavbarContainer, NavbarExtendedContainer, NavbarInnerContainer, NavbarLinkContainer, OpenLinkButton, RightContainer} from '../Styles/Styled Components/Navbar.style'
import "../Styles/css/Navbar.css"

function Navbar() {
  const [extendedNavbar, setExtendedNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendedNavbar}>
        <NavbarInnerContainer>
            <LeftContainer>
                <NavbarLinkContainer>
                    <NavBarLink to="/education">Education</NavBarLink>
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
                <NavBarHomeLink to="/">David Zarate Lopez</NavBarHomeLink>
            </RightContainer>
        </NavbarInnerContainer>
       { extendedNavbar &&
       
       <NavbarExtendedContainer>
            <div className="navbar-line"/>
            <NavBarLinkExtended to="/education">Education</NavBarLinkExtended>
            <div className="line-1"/>
            <NavBarLinkExtended to="/about">About</NavBarLinkExtended>
            <div className="line-1"/>
            <NavBarLinkExtended to="/projects">Projects</NavBarLinkExtended>
            <div className="line-1"/>
            <NavBarLinkExtended to="/experience">Experience</NavBarLinkExtended>
        </NavbarExtendedContainer>}
    </NavbarContainer>
  )
}

export default Navbar