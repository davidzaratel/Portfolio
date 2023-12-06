import styled from "styled-components";

export const LanguagesContainer = styled.div  `
    display: flex;
    flex-wrap: wrap;
    margin: 0px 23% 0px 23%;
    @media(max-width: 750px){
        margin: 0px 15% 0px 10%;
    }
    @media(max-width: 450px) {
        margin: 30px 10% 20px 10%;
    }
`

export const SingleSkillTitle = styled.h3 `
    font-size: 24px;
    font-weight: normal;
    margin-bottom: 20px;
    text-align: center;
    width:  ${(props) => props.width ? props.width : "33.3%"};
    @media(max-width: 1000px){
        font-size: 18px;
        margin-bottom: 15px;

    }
    @media(max-width: 750px){
        font-size: 12px;
        margin-bottom: 15px;
        width: 50%;
    }
    @media(max-width: 450px) { 
        font-size: 10px;
    }
`


export const TechnologiesContainer = styled.div  `
    display: flex;
    flex-wrap: wrap;
    margin: 0px 10% 40px 10%;
    @media(max-width: 450px) {
        margin-top: 30px;
        margin-bottom: 30px;
    }
`