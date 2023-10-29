import styled from "styled-components";

export const PageContainer = styled.div `
    margin: 0px 120px 0px 120px;
    @media(max-width: 1200px) {
        margin: 0px 70px 0px 70px;
    }
    @media(max-width: 750px) {
        margin: 0px 100px 0px 100px;
    }
    @media(max-width: 550px) {
        margin: 0px 50px 0px 50px;
    }
    @media(max-width: 400px) {
        margin: 0px 15px 0px 15px;
    }
`

export const TitleContainer = styled.div `
    margin: auto;
    margin-top: 5%;
    margin-bottom: 5%;
    width: 50%;
    text-align: center;
`;

export const SectionDescriptionContainer = styled.div `
    margin: auto;
    font-size: 25px;
    width: 90%;
    text-align: center;
    margin-bottom: 70px;
    @media(max-width: 1000px) {
        font-size: 20px;
    }
    @media(max-width: 750px) {
        font-size: 12px;
    }
`

export const PrimaryTitle = styled.h1 `
    margin: auto;
    white-space: nowrap;
    color: ${(props) => props.color};
    @media(min-width: 1000px) {
        font-size: 70px;
    }
`

export const PrimarySubtitle = styled.h2 `
    margin: auto;
    white-space: nowrap;
    @media(min-width: 1000px) {
        font-size: 40px;
    }
`

export const SecondarySubtitle = styled.h3 `
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize ? props.fontSize : '1.5vw'};
    white-space: nowrap;
    @media(min-width: 750px) {
        padding-top: 20px;
    }
    @media(max-width: 750px) {
        padding-top: 10px;
    }
`

export const TextContainer = styled.div `
    margin: auto;
    font-size: 24px; 
    margin-top: 5%;
    margin-bottom: 5%;
    width: 90%;
    text-align: ${(props) => props.alignment ? props.alignment : 'justify'};;
    @media(max-width: 1000px) {
        font-size: 18px;
    }
    @media(max-width: 750px) {
        font-size: 10px;
    }
`

export const SectionSeparator = styled.div `
    height: 1px;
    width: ${(props) => props.width ? props.width : 0};
    margin: auto;
    margin-top: 10px;
    background: ${(props) => props.color};
    @media(max-width: 1500px) {
        margin-top: 5px;
    }
`