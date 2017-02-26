import React from 'react';
import '../css/AdventuresExperiences';

import Title from './Title';
import Label from './Label';
import Button from './Button';
import Slider from './Slider';

import HistoryPhoto from '../images/photo12.png';
import ShepardPhoto from '../images/photo13.png';
import GastronomyPhoto from '../images/photo14.png';

const adventuresExperiences = [
  { name: 'HISTORY & CULTURE', photo: HistoryPhoto },
  { name: 'BE A SHEPPERD', photo: ShepardPhoto },
  { name: 'TRY THE GASTRONOMY', photo: GastronomyPhoto }
];

const AdventuresExperiences = () => (
  <section className="AdventuresExperiences">
    <div className="AdventuresExperiences-header">
      <Title>ADVENTURES & EXPERIENCES</Title>
    </div>

    <div className="AdventuresExperiences-list">
      <Slider>
        {adventuresExperiences.map(({ name, photo }) => (
          <div className="AdventuresExperiences-item">
            <img src={photo} className="AdventuresExperiences-itemImage" />
            <div className="AdventuresExperiences-itemLabel">
              <Label>{name}</Label>
            </div>
            <div className="AdventuresExperiences-itemOverlay" />
          </div>
        ))}
      </Slider>
    </div>

    <div className="AdventuresExperiences-actions">
      <Button alternative>SCHEDULE AN ADVENTURE</Button>
    </div>
  </section>
);

export default AdventuresExperiences;
