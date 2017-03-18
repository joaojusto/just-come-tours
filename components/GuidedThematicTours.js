import React from 'react';
import '../css/GuidedThematicTours';

import Text from './Text';
import Title from './Title';
import Button from './Button';
import ImageContainer from './ImageContainer';
import GuidedThematicToursImage from '../images/photo9.jpg';
import GuidedThematicToursImage2 from '../images/photo10.jpg';
import GuidedThematicToursImage3 from '../images/photo4.jpg';
import Grid, { GridColumn } from './Grid';

const GuidedThematicTours = () => (
  <section className="GuidedThematicTours">
    <div className="GuidedThematicTours-content">
      <Grid offset="1">
        <GridColumn size="6">
          <GridColumn size="4">
            <div className="GuidedThematicTours-header">
              <Title>GUIDED TOURS & THEMATIC ROUTS </Title>
            </div>
          </GridColumn>
          <Text>
            Are “Tayler Made” programs, designed according with the profile of each
            tourist. With some information about what the visitor most likes, his
            interests and motivations, we will organize the accommodation and
            activities that will match the expectations of each person or group.
          </Text>
        </GridColumn>

        <GridColumn size="5" background right="-1">
          <ImageContainer src={GuidedThematicToursImage3} />
        </GridColumn>
      </Grid>

      <div className="GuidedThematicTours-actions">
        <Grid offset="1">
          <GridColumn size="4">
            <Button>create your program</Button>
          </GridColumn>
          <GridColumn size="3">
            <ImageContainer src={GuidedThematicToursImage} />
          </GridColumn>
          <GridColumn size="3">
            <div className="GuidedThematicTours-footerImage">
              <ImageContainer src={GuidedThematicToursImage2} />
            </div>
          </GridColumn>
        </Grid>
      </div>
    </div>
  </section>
);

export default GuidedThematicTours;
