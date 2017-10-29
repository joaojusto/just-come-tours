import React from 'react';

import '../css/Hero';
import Text from './Text';
import Logo from './Logo';
import Button from './Button';
import PageTitle from './PageTitle';
import VideoBackground from '../videos/video.mp4';
import HeroBackgroundMobile from '../images/hero-mobile.jpg';
import HeroBackgroundDesktop from '../images/hero@2x.jpg';

const video = className => (
  <video
    loop
    muted
    autoPlay
    playsInline
    preload="auto"
    type="video/mp4"
    ref={video => video.play}
    className={className}
  >
    <source src={VideoBackground} />
  </video>
);

const Hero = () => (
  <section className="Hero">
    {video('Hero-background')}
    <div className="Hero-darkOverlay" />
    <div className="Hero-lightOverlay" />
    <div className="Hero-content">
      <Logo className="Hero-logo" />
      <PageTitle>Countryside & Adventure Tours</PageTitle>
      <Text alternative>
        Between rivers of emotions and mountains of charms.
      </Text>

      <div className="Hero-actions">
        <Button to="mailto:webmaster@example.com">Contact</Button>
      </div>
    </div>
  </section>
);

export default Hero;
