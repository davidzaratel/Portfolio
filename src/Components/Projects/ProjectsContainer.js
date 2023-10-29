import React from 'react'
import { ProjectTile } from './Single Project/ProjectTile'
import { ProjectsRow } from '../../Styles/Styled Components/Projects.style'
import { projectsData } from './Model/ProjectsData'

export const ProjectsContainer = () => {
  return (
    <ProjectsRow>
      {projectsData.map(((projects) => (
        <ProjectTile {...projects}/>
      )))}
    </ProjectsRow>
  )
}
