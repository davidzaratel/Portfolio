import React from "react"
import aboutPhoto from "../../Resources/David_Horizontal.png"
import '../../App.css'
import {PageContainer, TextContainer, PrimarySubtitle, PrimaryTitle, TitleContainer, SectionDescriptionContainer, SectionSeparator } from "../../Styles/Styled Components/Reusable.style"
import '../../Styles/css/About.css'
import { motion } from 'framer-motion'
import Summary from "./Summary"
import Interests from "./Interests"
import AllSkills from "./AllSkills"

export const About = () => {
    return(
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
       >
            <PageContainer>
                <TitleContainer>
                    <PrimaryTitle color={"black"}>Hello There!</PrimaryTitle>
                    <SectionSeparator width="30%" color="black"/>
                </TitleContainer>
                <SectionDescriptionContainer>
                    <p>Here's information about me, my trajectory and interests.
                    </p>
                </SectionDescriptionContainer>
                <div className="imageContainer">
                    <img src={aboutPhoto} alt="Avatar" className="image"></img>
                    <div className="hoverOverlay">
                        <div className="hoverImageText">
                            <h1 className="titleHoverImage">I'm David</h1>
                            <h4 className="descriptionHoverImage">
                            I was born in Arizona but I lived in Mexico my whole life.
                            I'm an outgoing, perseverant, and resilient person who's driven by solving real-life problems to help others through technology. 
                            I'm constantly working on improving my Software Engineering abilities and looking for opportunities to grow as an Engineer.
                            </h4>
                        </div>
                    </div>
                </div>
                <Summary/>

                <Interests/>

                <TitleContainer>
                    <PrimarySubtitle>About this Portfolio</PrimarySubtitle>
                </TitleContainer>
                
                <TextContainer>
                    <p>Through this portfolio, I wanted to give a better perspective of who am I, what I'm passionate about, and the different experiences I've been lucky to have. In case 
                        you want to consult my Resume for more details, please click on the left-most icon in the Navigation Bar.
                        Also, it was developed using ReactJS and styled-components to have a clean but personalized website.
                    </p>
                </TextContainer>
                <AllSkills/>
            </PageContainer>
        </motion.div>
    )
}