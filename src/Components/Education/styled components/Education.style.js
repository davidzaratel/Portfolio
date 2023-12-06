import styled from "styled-components";

export const OrganizationLogo = styled.img `
    width: 25%;
`

export const EducationSection = styled.div `
    width: 100%;
    text-align: center;
    margin: 50px auto 50px auto;
`

export const OrganizationDetails = styled.div `
    margin: auto;
    margin-bottom: 25px;
    width: 100%;
    height: 100%;
    @media(max-width: 750px){
        margin-bottom: 15px;
    }
`

export const CoursesContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    margin: 40px auto 40px auto;
    @media(max-width: 1200px){
        margin: 30px auto 30px auto;
    }
    @media(max-width: 750px){
        font-size: 11px;
        margin-bottom: 10px;
        margin: 20px auto 20px auto;
    }
    @media(max-width: 450px) {
        font-size: 7px;
        margin-bottom: 5px;
        margin: 20px auto 20px auto;
    }
`

export const CourseTitle = styled.h3 `
    width: 50%;
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 24px;
    @media(max-width: 1200px){
        font-size: 18px;
        margin-bottom: 20px;
    }
    @media(max-width: 750px){
        font-size: 12px;
        margin-bottom: 15px;
    }
    @media(max-width: 450px) {
        width: 100%;
        font-size: 10px;
    }
`