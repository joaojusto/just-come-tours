import React from 'react';
import '../css/CorporateTeamBuilding';

import Text from './Text';
import Title from './Title';
import Button from './Button';
import ImageContainer from './ImageContainer';
import CorporateTeamBuildingImage from '../images/photo7.png';

const CorporateTeamBuilding = () => (
  <section className="CorporateTeamBuilding">
    <div className="CorporateTeamBuilding-header">
      <Title>CORPORATE & TEAM BUILDING</Title>
    </div>
    <Text>
      Team building activities is an innovative formula to create relationship
      bonds more profound between collaborators of the same company of
      organization, in a way so the company achieves superior production levels,
      more team performance and happiness on work.
    </Text>
    <div className="CorporateTeamBuilding-actions">
      <Button>KNOW MORE</Button>
    </div>
    <div className="CorporateTeamBuilding-image">
      <ImageContainer src={CorporateTeamBuildingImage} />
    </div>
  </section>
);

export default CorporateTeamBuilding;
