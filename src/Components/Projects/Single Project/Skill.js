import React from 'react'
import { SingleSkillContainer, SkillTitle } from '../../../Styles/Styled Components/Projects.style'

export const Skill = (props) => {
  return (
    <SingleSkillContainer>
         <SkillTitle>{props.title}</SkillTitle>
    </SingleSkillContainer>
  )
}
