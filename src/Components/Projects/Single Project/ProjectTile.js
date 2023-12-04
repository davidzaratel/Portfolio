import React from 'react'
import { ProjectContainer, ProjectHoverDescription, ProjectHoverOverlay, ProjectHoverText, ProjectImageContainer, ProjectPicture, ProjectTitle, ProjectType, SkillsContainer, TileTitle } from '../styled/Projects.style'
import { SectionSeparator } from '../../../Styles/Styled Components/Reusable.style'
import { Skill } from './Skill'

export const ProjectTile = (props) => {
  return (
    <ProjectContainer>
        <ProjectImageContainer>
            <ProjectPicture src={props.image} alt="Project Photo"></ProjectPicture>
            <ProjectHoverOverlay>
                <ProjectHoverText>
                    <TileTitle>Description</TileTitle>
                    <ProjectHoverDescription>
                      {props.description}
                    </ProjectHoverDescription>
                    <SectionSeparator width="100%" color="white"/>
                    <SkillsContainer>
                      {props.skills?.map(((skill) => (
                         <Skill title={skill}/>
                        )))}
                    </SkillsContainer>
                </ProjectHoverText>
            </ProjectHoverOverlay>
        </ProjectImageContainer>
        <ProjectTitle href={props.link} target="_blank">{props.title}</ProjectTitle>
        <ProjectType>{props.type}</ProjectType>
    </ProjectContainer>
  )
}
