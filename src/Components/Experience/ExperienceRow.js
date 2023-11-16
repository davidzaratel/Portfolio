import React from 'react'
import { BulletPoint, BulletPointsContainer, ExperienceImage, ExperienceImageContainer, ExperienceInfoContainer, ExperienceRowContainer, ExperienceSkillsContainer } from './styled components/Experience.style'
import { OrganizationSubtitle1, OrganizationSubtitle2, OrganizationTitle, SectionSeparator } from '../../Styles/Styled Components/Reusable.style'
import { Skill } from '../Projects/Single Project/Skill'

function ExperienceRow(props) {
  return (
    <ExperienceRowContainer>
        <ExperienceImageContainer>
            <ExperienceImage src={props.image}/>
        </ExperienceImageContainer>
        <ExperienceInfoContainer>
            <OrganizationTitle>{props.projectName}</OrganizationTitle>
            <OrganizationSubtitle1>{props.companyName}</OrganizationSubtitle1>
            <OrganizationSubtitle2>{props.location} | {props.period}</OrganizationSubtitle2>
            <BulletPointsContainer>
                {props.bulletPoints.map((point) => {
                    return (<BulletPoint>- {point}</BulletPoint>)
                })}
            </BulletPointsContainer>
            <SectionSeparator/>
            <ExperienceSkillsContainer>
                {props.skills?.map(((skill) => (
                    <Skill borderColor='solid black' title={skill} hoverColor='#023047' hoverFontColor='white'/>
                )))}
            </ExperienceSkillsContainer>
        </ExperienceInfoContainer>
    </ExperienceRowContainer>
  )
}

export default ExperienceRow