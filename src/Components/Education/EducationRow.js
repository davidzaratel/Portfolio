import React from 'react'
import { CourseTitle, CoursesContainer, EducationEnrollment, EducationLevel, EducationSection, OrganizationDetails, OrganizationLogo, OrganizationTitle } from './styled components/Education.style'
import { SecondarySubtitle, SectionSeparator } from '../../Styles/Styled Components/Reusable.style'

function EducationRow(props) {
  return (
    <EducationSection>
        <OrganizationLogo src={props.logo}/>
        <OrganizationDetails>
            <OrganizationTitle>{props.organizationName}</OrganizationTitle>
            <EducationLevel>{props.educationLevel}</EducationLevel>
            <EducationEnrollment>{props.educationEnrollment}</EducationEnrollment>
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