import React from 'react'
import { experienceData } from '../Experience/model/ExperienceData'
import ExperienceRow from './ExperienceRow'

function ExperienceContainer() {
  return (
    <div>
        {experienceData.map(((experience)=> {
            return(<ExperienceRow {...experience}/>)
        }))}
    </div>
  )
}

export default ExperienceContainer