import React from 'react';
import '../css/CorporateTeamBuilding';

import Text from './Text';
import Title from './Title';
import Button from './Button';
import ImageContainer from './ImageContainer';
import CorporateTeamBuildingImage from '../images/photo7.jpg';
import CorporateTeamBuildingImage2 from '../images/photo5.jpg';
import CorporateTeamBuildingImage3 from '../images/photo6.jpg';
import Grid, { GridColumn } from './Grid';

const CorporateTeamBuilding = () => (
  <section className="CorporateTeamBuilding">
    <div className="CorporateTeamBuilding-content">
      <Grid>
        <GridColumn size="5"/>
        <GridColumn size="6" background left="-1">
          <div className="CorporateTeamBuilding-desktopImage">
            <ImageContainer src={CorporateTeamBuildingImage2} />
          </div>
        </GridColumn>
        <GridColumn size="6">
          <GridColumn size="3">
            <div className="CorporateTeamBuilding-header">
              <Title>CORPORATE & TEAM BUILDING</Title>
            </div>
          </GridColumn>
          <Text>
            Team building activities is an innovative formula to create relationship
            bonds more profound between collaborators of the same company of
            organization, in a way so the company achieves superior production levels,
            more team performance and happiness on work.
          </Text>
          <div className="CorporateTeamBuilding-actions">
            <Button>KNOW MORE</Button>
          </div>
        </GridColumn>
      </Grid>
      <div className="CorporateTeamBuilding-images">
        <Grid offset="1">
          <GridColumn size="4">
            <ImageContainer src={CorporateTeamBuildingImage} />
          </GridColumn>
          <GridColumn size="5">
            <div className="CorporateTeamBuilding-desktopImage">
              <ImageContainer src={CorporateTeamBuildingImage3} />
            </div>
          </GridColumn>
        </Grid>
      </div>
    </div>
  </section>
);

export default CorporateTeamBuilding;
