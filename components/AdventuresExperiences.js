import React from 'react';
import '../css/AdventuresExperiences';

import Title from './Title';
import Label from './Label';
import Button from './Button';
import Slider from './Slider';

import HistoryPhoto from '../images/photo12.jpg';
import ShepardPhoto from '../images/photo13.jpg';
import GastronomyPhoto from '../images/photo14.jpg';
import RaftingPhoto from '../images/photo11.jpg';
import Grid, { GridColumn } from './Grid';

const adventuresExperiences = [
  { name: 'RAFTING', photo: RaftingPhoto },
  { name: 'HISTORY & CULTURE', photo: HistoryPhoto },
  { name: 'BE A SHEPPERD', photo: ShepardPhoto },
  { name: 'TRY THE GASTRONOMY', photo: GastronomyPhoto }
];

const AdventuresExperiences = () => (
  <section className="AdventuresExperiences">
    <Grid offset="3">
      <GridColumn size="5">
        <div className="AdventuresExperiences-header">
          <Title>ADVENTURES & EXPERIENCES</Title>
        </div>
      </GridColumn>
    </Grid>

    <Grid>
      <div className="AdventuresExperiences-list">
        <Slider>
          {adventuresExperiences.map(({ name, photo }, index) => (
            <div className={`AdventuresExperiences-item position-${index + 1}`}>
              <img src={photo} className="AdventuresExperiences-itemImage" />
              <div className="AdventuresExperiences-itemLabel">
                <Label>{name}</Label>
              </div>
              <div className="AdventuresExperiences-itemOverlay" />
            </div>
          ))}
        </Slider>
      </div>
    </Grid>


    <div className="AdventuresExperiences-actions">
      <Button alternative>SCHEDULE AN ADVENTURE</Button>
    </div>
  </section>
);

export default AdventuresExperiences;
