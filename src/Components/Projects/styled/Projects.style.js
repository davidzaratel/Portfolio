import styled from "styled-components";


export const ProjectHoverOverlay = styled.div `
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

export const ProjectImageContainer = styled.div `
    position: relative;
    margin-bottom: 20px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    border-radius: 2%;
    &:hover {
        ${ProjectHoverOverlay} {
            backdrop-filter: blur(20px);
            opacity: 1;
        }
    }
`

export const ProjectContainer = styled.div `
    margin: auto;
    width: 30%;
    @media(min-width: 1250px) {
        margin-bottom: 100px;
        margin-top: 50px;
    }
    @media(max-width: 1250px) {
        margin-bottom: 50px;
        margin-top: 25px;
        width: 45%;
    }
    @media(max-width: 750px) {
        margin-bottom: 25px;
        margin-top: 12px;
        width: 90%;
    }
`

export const ProjectPicture = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2%;
`
export const ProjectTitle = styled.a `
    display: block;
    text-align: center;
    text-decoration: none;
    color: black;
    @media(min-width: 1250px) {
        font-size: 30px;
    }
    @media(max-width: 1250px) {
        font-size: 25px;
    }
    @media(max-width: 550px) {
        font-size: 20px;
    }
`

export const ProjectHoverText = styled.div `
    color: white;
    position: absolute;
    text-align: leading;
    @media(min-width: 1500px) {
        margin: 20px 20px;
        font-size: 15px;
    }
    @media(max-width: 1500px) {
        margin: 12px 12px;
        font-size: 12px;
    }
    @media(max-width: 400px) {
        font-size: 8px;
    }
`

export const ProjectsRow = styled.div `
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
`

export const TileTitle = styled.h1`
    text-align: left;
    margin-left: 0px;
    font-size: 20px;
    @media(max-width: 550px) {
        font-size: 15px;
    }
`

export const ProjectType = styled.h2 `
    margin: 10px;
    text-align: center;
    color: #023047;
    opacity: 70%;
    @media(min-width: 1250px) {
        font-size: 20px;
    }
    @media(max-width: 1250px) {
        font-size: 15px;
    }
    @media(max-width: 550px) {
        font-size: 12px;
    }
`

export const SkillTitle = styled.p `
    margin: 0px;
`

export const SkillsContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: auto;
`

export const SingleSkillContainer = styled.div `
    margin-left: 10px;
    border: ${(props) => props.borderColor ? props.borderColor : 'solid white'};
    border-width: 1px;
    text-align: center;
    border-radius: 100px;
    @media(min-width: 1200px) {
        margin-top: 10px;
        padding: 7px;
    }
    @media(max-width: 1200px) {
        margin-top: 7px;
        padding: 6px;
    }
    @media(max-width: 750px) {
        margin-top: 5px;
        padding: 5px;
    }
    &:hover {
        color: ${(props) => props.hoverFontColor ? props.hoverFontColor : 'black'};
        background-color: ${(props) => props.hoverColor ? props.hoverColor : 'white'};
    }
`

export const ProjectHoverDescription = styled.p` 
    margin-bottom: 10px;
`
