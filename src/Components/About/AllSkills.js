import React from 'react'
import { languages, programmingLanguages } from './model/AboutData'
import { technologies } from './model/AboutData'
import { PrimarySubtitle, TitleContainer } from '../../Styles/Styled Components/Reusable.style'
import { LanguagesContainer, SingleSkillTitle, TechnologiesContainer } from './styled/About.style'

function AllSkills() {
  return (
    <div>
        <TitleContainer>
            <PrimarySubtitle>Languages</PrimarySubtitle>
        </TitleContainer>
        <LanguagesContainer>
            {languages.map(((skill) => (
                <SingleSkillTitle width="25%">{skill}</SingleSkillTitle>
        )))}
        </LanguagesContainer>
        <TitleContainer>
            <PrimarySubtitle>Programming Languages</PrimarySubtitle>
        </TitleContainer>
        <LanguagesContainer>
            {programmingLanguages.map(((skill) => (
                <SingleSkillTitle>{skill}</SingleSkillTitle>
        )))}
        </LanguagesContainer>
        <TitleContainer>
            <PrimarySubtitle>Technologies</PrimarySubtitle>
        </TitleContainer>
        <TechnologiesContainer>
            {technologies.map(((skill) => (
                <SingleSkillTitle>{skill}</SingleSkillTitle>
        )))}
        </TechnologiesContainer>
    </div>
  )
}

export default AllSkills