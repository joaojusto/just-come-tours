import React from 'react';

import '../css/Event';

import Text from './Text';
import Title from './Title';
import Label from './Label';
import Button from './Button';
import ImageContainer from './ImageContainer';
import Grid, { GridColumn } from './Grid';

import EventImage from '../images/photo1.jpg';

const Event = () => (
  <section className="Event">
    <div className="Event-content">
      <Grid offset="1">
        <GridColumn size="5">
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
        </GridColumn>
        <GridColumn size="8" background left="3">
          <div className="Event-image">
            <ImageContainer src={EventImage} />
          </div>
        </GridColumn>
      </Grid>
    </div>
  </section>
);

export default Event;
