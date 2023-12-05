import React from 'react'
import { PageContainer, PrimaryTitle, SectionSeparator, TitleContainer } from '../../Styles/Styled Components/Reusable.style'
import EducationContainer from './EducationContainer'
import { motion } from 'framer-motion'

function Education() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
   >
      <PageContainer>
              <TitleContainer>
                  <PrimaryTitle>Education</PrimaryTitle>
                  <SectionSeparator width="30%" color="black"/>
              </TitleContainer>
              <EducationContainer/>
      </PageContainer>
    </motion.div>
  )
}

export default Education