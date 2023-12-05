import React from "react"
import { PageContainer, PrimaryTitle, SectionSeparator, TitleContainer, SectionDescriptionContainer} from "../../Styles/Styled Components/Reusable.style"
import { ProjectsContainer } from "./ProjectsContainer"
import { motion } from 'framer-motion'

export const Projects = () => {
    return(
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
       >
            <PageContainer>
                <TitleContainer>
                    <PrimaryTitle>Projects</PrimaryTitle>
                    <SectionSeparator width="30%" color="black"/>
                </TitleContainer>
                <SectionDescriptionContainer>
                    <p>Here you will find the projects I've worked in the past and the different technologies used to develop them.</p>
                </SectionDescriptionContainer>
                <ProjectsContainer/>
            </PageContainer>
        </motion.div>
    )
}