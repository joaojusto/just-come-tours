import React from 'react';

import '../css/Hero';
import Text from './Text';
import Title from './Title';
import PlayButton from './PlayButton';
import HeroBackground from '../images/hero-mobile.png';


const Hero = () => <section className="Hero">
  <img src={HeroBackground} className="Hero-background"/>
  <div className="Hero-darkOverlay" />
  <div className="Hero-lightOverlay" />
  <div className="Hero-content">
    <Title alternative>countryside & adventure tours</Title>
    <Text alternative>Between rivers of emotions and mountains of charms.</Text>

    <div className="Hero-actions">
      <PlayButton/>
    </div>
  </div>
</section>;

export default Hero;
