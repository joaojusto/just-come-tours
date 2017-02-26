import React from 'react';
import '../css/GuidedThematicTours';

import Text from './Text';
import Title from './Title';
import Button from './Button';
import ImageContainer from './ImageContainer';
import GuidedThematicToursImage from '../images/photo9.png';

const GuidedThematicTours = () => (
  <section className="GuidedThematicTours">
    <div className="GuidedThematicTours-header">
      <Title>GUIDED TOURS & THEMATIC ROUTS </Title>
    </div>
    <Text>
      Are “Tayler Made” programs, designed according with the profile of each
      tourist. With some information about what the visitor most likes, his
      interests and motivations, we will organize the accommodation and
      activities that will match the expectations of each person or group.
    </Text>
    <div className="GuidedThematicTours-actions">
      <Button>SEE THE TOURS</Button>
    </div>
    <div className="GuidedThematicTours-image">
      <ImageContainer src={GuidedThematicToursImage} />
    </div>
  </section>
);

export default GuidedThematicTours;
