import React from 'react'
import { CourseTitle, CoursesContainer, EducationSection, OrganizationDetails, OrganizationLogo } from './styled components/Education.style'
import { OrganizationSubtitle1, OrganizationSubtitle2, SecondarySubtitle, SectionSeparator, OrganizationTitle } from '../../Styles/Styled Components/Reusable.style'

function EducationRow(props) {
  return (
    <EducationSection>
        <OrganizationLogo src={props.logo}/>
        <OrganizationDetails>
            <OrganizationTitle>{props.organizationName}</OrganizationTitle>
            <OrganizationSubtitle1>{props.educationLevel}</OrganizationSubtitle1>
            <OrganizationSubtitle2>{props.educationEnrollment}</OrganizationSubtitle2>
        </OrganizationDetails>
        <SectionSeparator width="50%" color='#ced4da'/>
        <SecondarySubtitle>Relevant courses</SecondarySubtitle>
        <CoursesContainer>
          {props.courses.map(((course, index) => {
            return (<CourseTitle>{course}</CourseTitle>)
          }))}
        </CoursesContainer>
    </EducationSection>
  )
}

export default EducationRow