import React from "react"
import aboutPhoto from "../../Resources/David_Horizontal.png"
import '../../App.css'
import {PageContainer, TextContainer, PrimarySubtitle, PrimaryTitle, TitleContainer, SectionDescriptionContainer, SectionSeparator } from "../../Styles/Styled Components/Reusable.style"
import '../../Styles/css/About.css'
import { motion } from 'framer-motion'

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
                <TitleContainer>
                    <PrimarySubtitle>Summary</PrimarySubtitle>
                </TitleContainer>
                <TextContainer>
                    <p>Currently I'm a Computer Science Student in ITESM Puebla with expected graduation in
                        June of 2024. Over the past years I've been able to learn about different Software Engineering
                        areas such as: iOS and Web Development (Front-end & Back-end), Data Structures and Algorithms as well as Game Development.
                    </p>
                    <p>
                        I'm passionate about Software Engineering because it allows people to come up with amazing solutions to our day to day problems
                        or even to the most complicated ones we can imagine. I believe that with programming you're able to create whatever you can imagine,
                        you just need an idea and start working on it.
                    </p>
                </TextContainer>

                <TitleContainer>
                    <PrimarySubtitle>Areas of interest</PrimarySubtitle>
                </TitleContainer>
                
                <TextContainer>
                    <p>The areas that I want to persue are iOS and Web Development since it gives me the freedom to deliver an inmense range
                        of solutions to users, with the only limitation being my imagination. Furthermore, I've been able to be inmersed in the Mobile Development
                        field with two previous internships I had in which I learned how to collaborate efficiently inside of a team and implement technical solutions. 
                    </p>
                </TextContainer> 

                <TitleContainer>
                    <PrimarySubtitle>About this Portfolio</PrimarySubtitle>
                </TitleContainer>
                
                <TextContainer>
                    <p>Through this portfolio, I wanted to give a better perspective of who am I, what I'm passionate about, and the different experiences I've been lucky to have. 
                        Also, it was developed using ReactJS and styled-components to have a clean but personalized website.
                    </p>
                </TextContainer>
            </PageContainer>
        </motion.div>
    )
}