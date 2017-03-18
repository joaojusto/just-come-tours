import React from 'react';
import '../css/TourismPrograms';

import Text from './Text';
import Title from './Title';
import Button from './Button';
import ImageContainer from './ImageContainer';
import TourismProgramsImage from '../images/photo9.jpg';
import TourismProgramsImage2 from '../images/photo10.jpg';
import TourismProgramsImage3 from '../images/photo4.jpg';
import Grid, { GridColumn } from './Grid';

const TourismPrograms = () => (
  <section className="TourismPrograms">
    <div className="TourismPrograms-content">
      <Grid offset="1">
        <GridColumn size="6">
          <GridColumn size="4">
            <div className="TourismPrograms-header">
              <Title>personalized tourism programs</Title>
            </div>
          </GridColumn>
          <Text>
            Are “Tayler Made” programs, designed according with the profile of each
            tourist. With some information about what the visitor most likes, his
            interests and motivations, we will organize the accommodation and
            activities that will match the expectations of each person or group.
          </Text>
        </GridColumn>

        <GridColumn size="3">
          <ImageContainer src={TourismProgramsImage2} />
        </GridColumn>
      </Grid>

      <div className="TourismPrograms-actions">
        <Grid offset="1">
          <GridColumn size="4">
            <Button>create your program</Button>
          </GridColumn>
          <GridColumn size="3">
            <ImageContainer src={TourismProgramsImage} />
          </GridColumn>
          <GridColumn size="5" background right="-1">
            <ImageContainer src={TourismProgramsImage3} />
          </GridColumn>
        </Grid>
      </div>
    </div>
  </section>
);

export default TourismPrograms;
