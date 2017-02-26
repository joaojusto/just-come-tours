import React from 'react';
import '../css/TourismPrograms';

import Text from './Text';
import Title from './Title';
import Button from './Button';
import ImageContainer from './ImageContainer';
import TourismProgramsImage from '../images/photo9.png';

const TourismPrograms = () => (
  <section className="TourismPrograms">
    <div className="TourismPrograms-header">
      <Title>personalized tourism programs</Title>
    </div>
    <Text>
      Are “Tayler Made” programs, designed according with the profile of each
      tourist. With some information about what the visitor most likes, his
      interests and motivations, we will organize the accommodation and
      activities that will match the expectations of each person or group.
    </Text>
    <div className="TourismPrograms-actions">
      <Button>create your program</Button>
    </div>
    <div className="TourismPrograms-image">
      <ImageContainer src={TourismProgramsImage} />
    </div>
  </section>
);

export default TourismPrograms;
