import React from 'react'
import { educationData } from './model/EducationData'
import EducationRow from './EducationRow'
import { SectionSeparator } from '../../Styles/Styled Components/Reusable.style'

function EducationContainer() {
  return (
    <div>
      {educationData.map(((education, index) => {
        if (index !== educationData.length - 1){
            return (<div>
                <EducationRow {...education}/>
                <SectionSeparator/>
            </div>);
        } else  {
            return (<EducationRow {...education}/>);
        }
    }))}
    </div>
  )
}

export default EducationContainer