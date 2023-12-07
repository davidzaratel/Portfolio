import styled from "styled-components";

export const PageContainer = styled.div `
    margin: 0px 120px 0px 120px;
    @media(max-width: 1200px) {
        margin: 0px 70px 0px 70px;
    }
    @media(max-width: 550px) {
        margin: 0px 50px 0px 50px;
    }
    @media(max-width: 400px) {
        margin: 0px 30px 0px 30px;
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
    font-size: 24px;
    width: 90%;
    text-align: center;
    margin-bottom: 70px;
    @media(max-width: 1000px) {
        margin-bottom: 50px;
        font-size: 18px;
    }
    @media(max-width: 750px) {
        margin-bottom: 30px;
        font-size: 12px;
    }
`

export const PrimaryTitle = styled.h1 `
    margin: auto;
    color: ${(props) => props.color};
    @media(min-width: 1200px) {
        font-size: 60px;
    }
    @media(max-width: 1200px) {
        font-size: 50px;
    }
    @media(max-width: 750px) {
        font-size: 40px;
    }
    @media(max-width: 450px) {
        font-size: 30px;
    }
    @media(max-width: 320px) {
        font-size: 20px;
    }
`

export const PrimarySubtitle = styled.h2 `
    margin: auto;
    @media(min-width: 1200px) {
        font-size: 40px;
    }
    @media(max-width: 1200px) {
        font-size: 30px;
    }
    @media(max-width: 750px) {
        font-size: 20px;
    }
    @media(max-width: 450px) {
        font-size: 20px;
    }
    @media(max-width: 320px) {
        font-size: 15px;
    }
`

export const SecondarySubtitle = styled.h3 `
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize ? props.fontSize : '20px'};
    white-space: nowrap;
    padding-top: 20px;
    @media(max-width: 1200px){
        font-size: 18px;
    }
    @media(max-width: 750px){
        font-size: 16px;
        padding-top: 10px;
    }
    @media(max-width: 450px) {
        font-size: 14px;
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
    width: ${(props) => props.width ? props.width : 1};
    margin: auto;
    margin-top: 10px;
    background: ${(props) => props.color ? props.color : 'black'};
    @media(max-width: 1500px) {
        margin-top: 5px;
    }
`

export const OrganizationTitle = styled.h1 `
    margin: 0px;
    @media(min-width: 1200px){
        font-size: 30px;
    }
    @media(max-width: 1200px){
        font-size: 24px;
    }
    @media(max-width: 750px){
        font-size: 20px;
    }
    @media(max-width: 450px) {
        font-size: 18px;
    }
`

export const OrganizationSubtitle1 = styled.h2 `
    margin: 10px 0px 10px 0px;
    font-weight: normal;
    font-style: italic;
    @media(min-width: 1200px){
        font-size: 20px;
    }
    @media(max-width: 1200px){
        font-size: 18px;
    }
    @media(max-width: 750px){
        font-size: 16px;
    }
    @media(max-width: 450px) {
        font-size: 14px;
    }
`

export const OrganizationSubtitle2 = styled.h3 `
    font-size: 18px;
    margin: 10px 0px 10px 0px;
    text-align: ${(props) => props.align ? props.align : ''};
    @media(min-width: 1200px){
        font-size: 18px;
    }
    @media(max-width: 1200px){
        font-size: 16px;
    }
    @media(max-width: 750px){
        font-size: 12px;
    }
    @media(max-width: 450px) {
        font-size: 8px;
    }
`