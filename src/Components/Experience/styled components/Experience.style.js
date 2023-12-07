import styled from "styled-components";

export const ExperienceImageContainer = styled.div `
    width: 25%;
    @media(max-width: 750px) {
        width: 100%;
        height: 250px;
    }
    @media(max-width: 450px) {
        width: 100%;
        height: 150px;
    }
`

export const ExperienceImage = styled.img `
    object-fit: cover;
    margin-bottom: 40px;
    border-radius: 2%;
    width: 100%;
    height: 100%;
`
export const ExperienceInfoContainer = styled.div `
    width: 75%;
    text-align: left;
    @media(min-width: 1200px) {
        margin-left: 20px;
    }
    @media(max-width: 1200px) {
        margin-left: 15px;
    }
    @media(max-width: 750px) {
        width: 100%;
        margin: 20px 0px 20px 0px;
        text-align: center;
    }
`
export const ExperienceRowContainer = styled.div `
    display: flex;
    width: 100%;
    margin: 100px 0px 40px 0px;
    @media(max-width: 750px) {
        margin: 50px 0px 40px 0px;
        display: block;
        width: 100%;
    }
`

export const BulletPoint = styled.div `
    @media(min-width: 1200px){
        font-size: 16px;
    }
    @media(max-width: 1200px){
        font-size: 14px;
    }
    @media(max-width: 750px){
        font-size: 12px;
        list-style-type: none;
    }
    @media(max-width: 450px) {
        font-size: 8px;
    }
`

export const ExperienceSkillsContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: auto;
    margin-top: 10px;
    @media(min-width: 1200px){
        font-size: 16px;
    }
    @media(max-width: 1200px){
        font-size: 14px;
    }
    @media(max-width: 750px){
        font-size: 12px;
    }
    @media(max-width: 450px) {
        font-size: 8px;
    }
`
export const BulletPointsContainer = styled.div `
    margin-bottom: 10px;
`