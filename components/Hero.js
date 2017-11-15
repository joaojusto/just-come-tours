import React from 'react';

import '../css/Hero';
import Text from './Text';
import Logo from './Logo';
import Button from './Button';
import Youtube from 'react-youtube';
import PageTitle from './PageTitle';
import HeroBackgroundMobile from '../images/hero-mobile.jpg';
import HeroBackgroundDesktop from '../images/hero@2x.jpg';

const YoutubeVideoId = '1F23QJ_U2MI';
const youtubeOpts = {
  playerVars: {
    autoplay: 1,
    loop: 1,
    controls: 0,
    playlist: YoutubeVideoId
  }
};

const Hero = () => (
  <section className="Hero">
    <Youtube
      className="Hero-background"
      videoId={YoutubeVideoId}
      opts={youtubeOpts}
    />
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
        <Button alternative to="tel:+351918460295">
          Call Us
        </Button>
      </div>
    </div>
  </section>
);

export default Hero;
