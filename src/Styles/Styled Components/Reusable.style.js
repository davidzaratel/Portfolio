import styled from "styled-components";

export const TitleContainer = styled.div `
    margin: auto;
    margin-top: 5%;
    margin-bottom: 5%;
    width: 50%;
    text-align: center;
`;

export const PrimaryTitle = styled.h1 `
    font-size: 5vw;
    margin: auto;
    white-space: nowrap;
    color: ${(props) => props.color};
`

export const PrimarySubtitle = styled.h2 `
    font-size: 3vw;
    margin: auto;
    white-space: nowrap;
`

export const SecondarySubtitle = styled.h3 `
    color: ${(props) => props.color};
    font-size: 1.5vw;
    white-space: nowrap;
    @media(min-width: 750px) {
        padding-top: 20px;
    }
    @media(max-width: 750px) {
        padding-top: 10px;
    }
`

export const ParagraphContainer = styled.div `
    margin: auto;
    font-size: 2vw; 
    margin-top: 5%;
    margin-bottom: 5%;
    width: 90%;
    text-align: justify;
`
