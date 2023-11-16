import React from "react"
import { PageContainer, PrimaryTitle, SectionDescriptionContainer, SectionSeparator, TitleContainer } from "../../Styles/Styled Components/Reusable.style"
import ExperienceContainer from "./ExperienceContainer"

export const Experience = () => {
    return(
        <PageContainer>
            <TitleContainer>
                <PrimaryTitle>Experience</PrimaryTitle>
                <SectionSeparator width="30%" color="black"/>
            </TitleContainer>
            <SectionDescriptionContainer>
                <p>These are the different positions I've worked as and the projects I was able to take a part on.</p>
            </SectionDescriptionContainer>
            <ExperienceContainer/>
        </PageContainer>
    )
}