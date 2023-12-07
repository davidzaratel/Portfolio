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

export const AboutHoverOverlay = styled.div `
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: #00000075;
`

export const AboutImageContainer = styled.div `
    position: relative;
    width: 90%;
    height: 700px;
    margin: auto;
    &:hover {
        ${AboutHoverOverlay} {
            opacity: 1;
        }
    }
    @media(max-width: 1200px) {
        height: 570px;
        font-size: 35px;
    }
    @media(max-width: 750px) {
        height: 350px;
        font-size: 27px;
    }
    @media(max-width: 450px) {
        height: 250px;
        margin-bottom: 3px;
        font-size: 20px;
    }
    @media(max-width: 320px) {
        height: 200px;
        margin-bottom: 2px;
        font-size: 15px;
    }
`

export const AboutImage = styled.img `
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
`

export const AboutHoverImageText = styled.div `
    color: white;
    font-size: 24px;
    position: absolute;
    bottom: 2%;
    margin: 0px 20px 0px 20px;
    text-align: leading;
`

export const AboutTitleHoverImage = styled.h1 `
    margin: 0;
    margin-bottom: 5px;
    @media(min-width: 1200px) {
        font-size: 45px;
    }
    @media(max-width: 1200px) {
        font-size: 35px;
    }
    @media(max-width: 750px) {
        font-size: 27px;
    }
    @media(max-width: 450px) {
        margin-bottom: 3px;
        font-size: 20px;
    }
    @media(max-width: 320px) {
        margin-bottom: 2px;
        font-size: 15px;
    }
`

export const DescriptionHoverImage = styled.p `
    font-size: 24px;
    text-align: justify;
    @media(max-width: 1000px) {
        font-size: 18px;
    }
    @media(max-width: 750px) {
        font-size: 10px;
    }
    @media(max-width: 450px) {
        font-size: 8px;
    }
`