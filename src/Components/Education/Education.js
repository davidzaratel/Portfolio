import React from 'react'
import { PageContainer, PrimaryTitle, SectionSeparator, TitleContainer } from '../../Styles/Styled Components/Reusable.style'
import EducationContainer from './EducationContainer'

function Education() {
  return (
    <PageContainer>
            <TitleContainer>
                <PrimaryTitle>Education</PrimaryTitle>
                <SectionSeparator width="30%" color="black"/>
            </TitleContainer>
            <EducationContainer/>
    </PageContainer>
  )
}

export default Education