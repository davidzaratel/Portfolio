import React from 'react'
import { SingleSkillContainer, SkillTitle } from '../../../Styles/Styled Components/Projects.style'

export const Skill = (props) => {
  return (
    <SingleSkillContainer borderColor={props.borderColor} hoverColor={props.hoverColor} hoverFontColor={props.hoverFontColor}>
         <SkillTitle>{props.title}</SkillTitle>
    </SingleSkillContainer>
  )
}
