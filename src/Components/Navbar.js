import React from 'react'
import { useState } from 'react'
import {LeftContainer, NavBarHomeLink, NavBarLink, NavBarLinkExtended, NavbarContainer, NavbarExtendedContainer, NavbarInnerContainer, NavbarLinkContainer, OpenLinkButton, ResumeIcon, ResumeIconExtended, ResumeLink, ResumeLinkExtended, RightContainer} from '../Styles/Styled Components/Navbar.style'
import "../Styles/css/Navbar.css"
import resumeFile from '../Resources/files/DavidZARATELOPEZ_Resume.pdf'
import resumeLogo from '../Resources/icons/resume.png'

function Navbar() {
  const [extendedNavbar, setExtendedNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendedNavbar}>
        <NavbarInnerContainer>
            <LeftContainer>
                <NavbarLinkContainer>
                    <ResumeLink href={resumeFile} download="DavidZARATELOPEZ_Resume.pdf">
                        <ResumeIcon src={resumeLogo} alt='resume logo'></ResumeIcon>
                    </ResumeLink>
                    <NavBarLink to="Portfolio/education">Education</NavBarLink>
                    <NavBarLink to="Portfolio/about">About</NavBarLink>
                    <NavBarLink to="Portfolio/projects">Projects</NavBarLink>
                    <NavBarLink to="Portfolio/experience">Experience</NavBarLink>
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
                <NavBarHomeLink to="/">David Zárate López</NavBarHomeLink>
            </RightContainer>
        </NavbarInnerContainer>
       { extendedNavbar &&
       
       <NavbarExtendedContainer>
            <div className="navbar-line"/>
            <ResumeLinkExtended href={resumeFile} download="DavidZARATELOPEZ_Resume.pdf">
                <ResumeIconExtended src={resumeLogo} alt='resume logo'></ResumeIconExtended>
            </ResumeLinkExtended>
            <div className="line-1"/>
            <div className="navbar-line"/>
            <NavBarLinkExtended to="Portfolio/education" 
            onClick= {() => {
                        setExtendedNavbar((curr) => !curr);
            }}
            >Education</NavBarLinkExtended>
            <div className="line-1"/>
            <NavBarLinkExtended to="Portfolio/about"
            onClick= {() => {
                setExtendedNavbar((curr) => !curr);
            }}
            >About</NavBarLinkExtended>
            <div className="line-1"/>
            <NavBarLinkExtended to="Portfolio/projects"
            onClick= {() => {
                setExtendedNavbar((curr) => !curr);
            }}
            >Projects</NavBarLinkExtended>
            <div className="line-1"/>
            <NavBarLinkExtended to="Portfolio/experience"
            onClick= {() => {
                setExtendedNavbar((curr) => !curr);
            }}  
            >Experience</NavBarLinkExtended>
        </NavbarExtendedContainer>}
    </NavbarContainer>
  )
}

export default Navbar