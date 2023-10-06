import styled from "styled-components";

export const FooterContainer = styled.div `
    margin: auto;
    text-align: center;
    background-color: black;
    width: 100%;
    @media(min-width: 750px) {
        padding: 30px;
    }
    @media(max-width: 750px) {
        padding: 15px;
    }
`
export const TitleFooter = styled.footer `
    margin-top: 20px;
    color: white;
    font-size: 3vw;
    white-space: nowrap;
    color: ${(props) => props.color};
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
        margin: 5px;
    }
`