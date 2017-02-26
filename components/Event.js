import React from 'react';

import '../css/Event';

import Text from './Text';
import Title from './Title';
import Label from './Label';
import Button from './Button';
import ImageContainer from './ImageContainer';

import EventImage from '../images/photo1.png';

const Event = () => (
  <section className="Event">
    <div className="Event-description">
      <div className="Event-header">
        <Label>DECEMBER EVENT</Label>
        <Title alternative>RUN AFTER HISTORY</Title>
      </div>

      <Text alternative>Associação Geoparque Arouca</Text>
      <Text alternative>December 17, 2016</Text>

      <div className="Event-actions">
        <Button alternative>I WANT TO DO THIS</Button>
      </div>
    </div>
    <div className="Event-image">
      <ImageContainer src={EventImage} />
    </div>
  </section>
);

export default Event;
