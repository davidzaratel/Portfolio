import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.nav `
    width: 100%;
    height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
    display: flex;
    flex-direction: column;
    @media (min-width: 700px) {
        height: 80px;
    }
`;

export const LeftContainer = styled.div `
    flex: 60%;
    display: flex;
    align-items: center;
    padding-left: 5%;
`;

export const RightContainer = styled.div `
    flex: 40%;
    display: flex;
    align-items: center;
    text-align: right;
    padding-left: 70px;
`;

export const NavbarInnerContainer = styled.div `
    width: 100%;
    height: 80px;
    display: flex;
`;

export const NavbarLinkContainer = styled.div `
    display: flex;
`;

export const NavBarLink = styled(Link) `
    color: #0D1B2A;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;

    @media (max-width: 700px){
        display: none;
    }
`;

export const NavBarLinkExtended = styled(Link) `
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
`;
export const OpenLinkButton = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    cursor: pointer;

    @media (min-width: 700px){
        display: none;
    }
`

export const NavbarExtendedContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 700px) {
        display: none
    }
`;