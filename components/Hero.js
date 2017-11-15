import React from 'react';

import '../css/Hero';
import Text from './Text';
import Logo from './Logo';
import Button from './Button';
import PageTitle from './PageTitle';
import HeroBackgroundMobile from '../images/hero-mobile.jpg';
import HeroBackgroundDesktop from '../images/hero@2x.jpg';

const Hero = () => (
  <section className="Hero">
    <iframe className="Hero-background"
      volume="0"
      frameborder="0"
      allowfullscreen
      src="https://www.youtube.com/embed/1F23QJ_U2MI?controls=0&showinfo=0&rel=0&autoplay=1&loop=1">
    </iframe>
    <div className="Hero-darkOverlay" />
    <div className="Hero-lightOverlay" />
    <div className="Hero-content">
      <Logo className="Hero-logo" />
      <PageTitle>Countryside & Adventure Tours</PageTitle>
      <Text alternative>
        Between rivers of emotions and mountains of charms.
      </Text>

      <div className="Hero-actions">
        <Button to="mailto:info@justcome.pt">Contact</Button>
        <Button alternative to="tel:+351918460295">Call Us</Button>
      </div>
    </div>
  </section>
);

export default Hero;
