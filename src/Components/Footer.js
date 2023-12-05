import React from 'react'
import { FooterContainer, MediaContainer, TitleFooter, MediaLink, MediaImage } from '../Styles/Styled Components/Footer.style'
import { SecondarySubtitle } from '../Styles/Styled Components/Reusable.style'
import instaLogo from  '../Resources/icons/instagram.png'
import fbLogo from '../Resources/icons/facebook.png'
import lkdinLogo from '../Resources/icons/linkedin.png'
import emailLogo from '../Resources/icons/email.png'

function Footer() {
    return (
        <FooterContainer>
          <SecondarySubtitle color={"#6c757d"}>Contact me</SecondarySubtitle>
          <TitleFooter color={"white"}>Let's get in touch!</TitleFooter>
          <MediaContainer>
            <MediaLink href='https://www.instagram.com/davidzaratel/' target="_blank">
              <MediaImage src={instaLogo} alt='instagram logo'></MediaImage>
            </MediaLink>
            <MediaLink href='https://www.facebook.com/david.zaratelopez.1?locale=es_LA' target="_blank">
              <MediaImage src={fbLogo} alt='linkedin logo' className='mediaImage'></MediaImage>
            </MediaLink>
            <MediaLink href='https://www.linkedin.com/in/davidzaratel/' target="_blank">
              <MediaImage src={lkdinLogo} alt='media logo' className='mediaImage'></MediaImage>
            </MediaLink>
            <MediaLink href='mailto:davzaratelo@gmail.com' target="_blank"><
              MediaImage src={emailLogo} alt='media logo' className='mediaImage'></MediaImage>
            </MediaLink>
          </MediaContainer>
      </FooterContainer>
    )
}

export default Footer