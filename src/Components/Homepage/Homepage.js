import React from "react"
import {HomePageContainer, HomePageDescription, HomePageSubtitle, HomePageTitle, HomepageImage, HomepageTextContainer, LeftContainerHomepage, RightContainerHomepage } from "./styled/Homepage.style"
import "../../index.css"
import profile from './images/ProfileImage.png'
import { motion } from 'framer-motion'

export const HomePage = () => {
    return(
        <motion.div
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         exit={{opacity: 0}}
        >
            <HomePageContainer>
                <HomepageTextContainer>
                    <LeftContainerHomepage>
                        <HomePageTitle>Hey, I'm David</HomePageTitle>
                    </LeftContainerHomepage>
                    <RightContainerHomepage>
                        <HomepageImage src={profile}/>
                        <HomePageSubtitle>Welcome to my Portfolio!</HomePageSubtitle>
                        <HomePageDescription>I'm a Computer Science Student at ITESM Puebla perusing graduation on June 2024. 
                            I'm dedicated, outgoing perseverant and looking for opportunities to develop new 
                            abilities and knowledge in Software Engineering order to create products and services 
                            with meaningful impact in our society.
                            My expertise lies mainly on iOS and Web Development.
                        </HomePageDescription>
                    </RightContainerHomepage>   
                </HomepageTextContainer>
            </HomePageContainer>
        </motion.div>
    )
}