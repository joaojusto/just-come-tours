import React from 'react';

import '../css/Hero';
import Text from './Text';
import PageTitle from './PageTitle';
import PlayButton from './PlayButton';
import HeroBackgroundMobile from '../images/hero-mobile.jpg';
import HeroBackgroundDesktop from '../images/hero@2x.jpg';


const Hero = () => <section className="Hero">
  <img src={HeroBackgroundMobile} className="Hero-backgroundMobile"/>
  <img src={HeroBackgroundDesktop} className="Hero-backgroundDesktop"/>
  <div className="Hero-darkOverlay" />
  <div className="Hero-lightOverlay" />
  <div className="Hero-content">
    <PageTitle>Countryside & Adventure Tours</PageTitle>
    <Text alternative>Between rivers of emotions and mountains of charms.</Text>

    <div className="Hero-actions">
      <PlayButton/>
    </div>
  </div>
</section>;

export default Hero;
