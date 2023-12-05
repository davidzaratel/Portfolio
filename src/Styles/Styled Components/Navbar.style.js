import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.nav `
    width: 100%;
    height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
    display: flex;
    flex-direction: column;
    background-color: black;
    @media (min-width: 700px) {
        height: 80px;
    }
`;

export const LeftContainer = styled.div `
    flex: 70%;
    display: flex;
    align-items: center;
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
        padding-top: 10px;
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
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 7%;
    @media (max-width: 1200px) {
        margin: 7% 5% 7% 5%;
    }
    @media (max-width: 700px) {
        display: none;
    }
    @media (max-width: 900px) {
        font-size: large;
    }
    &:hover {
        color: #014f86;
    }
`;

export const NavBarLinkExtended = styled(Link) `
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
    @media (max-width: 450px) {
        font-size: large;
    }
    &:hover {
        color: #014f86;
    }
`;

export const OpenLinkButton = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    margin-bottom: 17px;
    cursor: pointer;

    @media (min-width: 701px) {
        display: none;
    }
`

export const NavBarHomeLink= styled(Link) `
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: auto;
    white-space: nowrap;
    margin-right: 10%;

    @media(max-width: 900px) {
        font-size: large;
    }
    @media (max-width: 700px) {
        font-size: large;
        margin-right: 5%;
    }
    @media (max-width: 450px) {
        font-size: medium;
        margin-right: 5%;
    }

    &:hover {
        color: #014f86;
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

export const ResumeLink = styled.a `
    color: white;
    margin: 7%;
    @media (max-width: 700px) {
        display: none;
    }
`

export const ResumeIcon = styled.img `
    padding-top: 10%;
    width: 30px;
    @media(max-width: 900px) {
        width: 25px;
    }
    @media (max-width: 700px) {
        display: none;
    }
    &:hover {
        filter: brightness(50%);
    }
`

export const ResumeIconExtended = styled.img `
    width: 30px;
    margin: 10px;
    &:hover {
        filter: brightness(50%);
    }
`

export const ResumeLinkExtended = styled.a `
    color: white;
    margin: 10px;
`;