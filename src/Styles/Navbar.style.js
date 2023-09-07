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
    flex: 70%;
    display: flex;
    align-items: center;
    padding-left: 3%;
    @media (max-width: 700px) {
        flex: 10%;
        height: 80px;
    }
`;

export const RightContainer = styled.div `
    flex: 30%;
    display: flex;
    align-items: center;
    text-align: right;
    padding-left: 20px;
    @media (max-width: 700px) {
        padding-top: 20px;
        padding-left: 0px;
        flex: 90%;
    }
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
    margin: 7%;

    @media (max-width: 700px) {
        display: none;
    }
    @media (max-width: 900px) {
        font-size: large;
    }
`;

export const NavBarLinkExtended = styled(Link) `
    color: #0D1B2A;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
    @media (max-width: 450px) {
        font-size: large;
    }
`;
export const OpenLinkButton = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: #0D1B2A;
    font-size: 45px;
    cursor: pointer;

    @media (min-width: 701px) {
        display: none;
    }
`

export const NavBarHomeLink= styled(Link) `
    color: #0D1B2A;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: auto;
    @media (max-width: 900px) {
        font-size: large;
    }
    @media (max-width: 700px) {
        font-size: x-large;
        margin-right: 40%;
    }
    @media (max-width: 450px) {
        font-size: large;
    }
`;

export const NavbarExtendedContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 700px) {
        display: none
    }
`;