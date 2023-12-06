import styled from "styled-components";

export const HomePageContainer= styled.div `
  background-color: black;
  display: flex;
`

export const HomepageTextContainer = styled.div `
    text-align: center;
    color: white;
    width: 100%;
    margin-bottom: 5%;
    margin-top: 3%;
    @media(min-width: 1200px) {
        display: flex;
    }
    @media(max-width: 1200px) {
        position: relative;
        top: 10%;
    }
`

export const LeftContainerHomepage = styled.div `
    width: 50%;
    @media(max-width: 1200px) {
        width: 100%;
    }
`
export const RightContainerHomepage = styled.div `
    text-align: left;
    width: 50%;
    @media(max-width: 1200px) {
        width: 80%;
        margin: auto;
        margin-top: 5%;
        text-align: center;
    }
`
export const HomePageTitle = styled.h1 `
    font-size: 210px;
    text-align: left;
    @media(min-width: 1200px) {
        margin-left: 9%;
    }
    @media(max-width: 1200px) {
        font-size: 100px;
        text-align: center;
    }
    @media(max-width: 750px) {
        font-size: 60px;
        text-align: center;
    }
    @media(max-width: 450px) {
        margin-top: 5%;
        font-size: 40px;
        text-align: center;
    }
`

export const HomePageSubtitle = styled.h2 `
    font-size: 50px;
    margin-bottom: 3%;
    @media(max-width: 1200px) {
        font-size: 40px;
        margin-top: 3%;
        margin-bottom: 5%;
    }
    @media(max-width: 750px) {
        font-size: 30px;
        margin-top: 5%;
        margin-bottom: 5%;
    }
    @media(max-width: 450px) {
        margin-top: 7%;
        margin-bottom: 7%;
    }
`

export const HomePageDescription = styled.p `
    font-size: 26px;
    padding-right: 5%;
    @media(max-width: 1200px) {
        padding-right: 0px;
    }
    @media(max-width: 750px) {
        font-size: 22px;
        padding-right: 0px;
        margin-bottom: 20%;
    }
    @media(max-width: 450px) {
        font-size: 16px;
        padding-right: 0px;
        margin-bottom: 20%;
    }
`

export const HomepageImage = styled.img `
    width: 40%;
    border-radius: 100%;
    margin: 5%;
    margin-left: 0%;
    @media(max-width: 450px) {
        width: 60%;
    }
`