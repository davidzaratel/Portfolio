import styled from "styled-components";

export const FooterContainer = styled.div `
    margin: auto;
    text-align: center;
    background-color: black;
    width: 100%;
    border-top: 1px #495057 solid;
    @media(min-width: 750px) {
        padding: 30px;
    }
    @media(max-width: 750px) {
        padding: 15px;
    }
`
export const TitleFooter = styled.footer `
    margin-top: 10px;
    margin-bottom: 20px;
    color: white;
    white-space: nowrap;
    color: ${(props) => props.color};
    font-size: 38px;
    @media(max-width: 1200px){
        font-size: 30px;
    }
    @media(max-width: 750px){
        font-size: 24px;
        padding-top: 10px;
    }
    @media(max-width: 450px) {
        font-size: 22px;
    }
`

export const MediaContainer = styled.div `
    margin: 0px;
    @media(min-width: 750px) {
        margin-top: 40px;
    }
    @media(max-width: 750px) {
        margin-top: 10px;
    }
`

export const MediaLink = styled.a `
    &:hover  {
        filter: brightness(200%)
    }

    @media(min-width: 470px) {
        margin: 20px;
    }
    @media(max-width: 470px) {
        margin: 10px;
    }
`

export const MediaImage = styled.img `
    width: 35px;
    color: white;
    @media(max-width: 1200px){
        width: 30px;
    }
    @media(max-width: 750px){
        width: 26px;
        margin-bottom: 20px;
    }
    @media(max-width: 450px) {
        width: 20px;
    }
`

export const CopyrightLabel = styled.p `
    color: #6c757d;
    margin-top: 25px;
    margin-bottom: 0px;
    font-size: 15px;
    @media(max-width: 750px){
        font-size: 12px;
        margin-top: 15px;
    }
    @media(max-width: 450px) {
        font-size: 10px;
        margin-top: 10px;
    }
`