import React from 'react'
import AboutHeader from '../../components/AboutPage/AboutHeader/AboutHeader'
import AboutSection from '../../components/AboutPage/AboutSection/AboutSection'
import AboutCards from '../../components/AboutPage/AboutCards/AboutCards'
import AboutSlider from '../../components/AboutPage/AboutSlider/AboutSlider'
import AboutSquares from '../../components/AboutPage/AboutSquares/AboutSquares'
import Contacts from '../../components/Contacts/Contacts'

const AboutPage = () => {
  return (
    <section>
      <AboutHeader/>
      <AboutSection/>
      <AboutCards/>
      <AboutSlider/>
      <AboutSquares/>
      <Contacts/>
    </section>
  )
}

export default AboutPage
