import React from 'react'
import { PrimarySubtitle, TextContainer, TitleContainer } from '../../Styles/Styled Components/Reusable.style'

function Summary() {
  return (
    <div>
        <TitleContainer>
            <PrimarySubtitle>Summary</PrimarySubtitle>
        </TitleContainer>
        <TextContainer>
            <p>Currently, I'm a Computer Science Student at ITESM Puebla with expected graduation in June of 2024. 
                Over the past years, I've been able to learn about different Software Engineering areas such as iOS and Web Development (Front-end and back-end), 
                Data Structures and Algorithms, Object Oriented Programming as well as Game Development.
            </p>
            <p>
            I'm passionate about Software Engineering because it allows people to come up with amazing solutions to our day-to-day problems or even to the most complicated ones we can imagine. 
            I believe that with programming you're able to create whatever you can imagine, you just need an idea and start working on it.
            </p>
            <p>
            On the other hand, I love to try new experiences, get to know people from all over the world, and learn about other cultures. 
            I'm a true believer that there's always something you can learn from someone else, that's why I really like to work with other people, 
            collaborate, and take into account different points of view to get to the best solution as a team.
            </p>
        </TextContainer>
    </div>
  )
}

export default Summary