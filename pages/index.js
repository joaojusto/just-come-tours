import React from 'react';

import '../css/Index';
import Hero from '../components/Hero';
import Event from '../components/Event';
import TourismPrograms from '../components/TourismPrograms';
import CorporateTeamBuilding from '../components/CorporateTeamBuilding';
import GuidedThematicTours from '../components/GuidedThematicTours';
import AdventuresExperiences from '../components/AdventuresExperiences';

const Index = () => (
  <div className="Index">
    <Hero />
    <Event />
    <span className="Index-sectionSpacer" />
    <TourismPrograms />
    <span className="Index-sectionSpacer" />
    <CorporateTeamBuilding />
    <span className="Index-sectionSpacer" />
    <GuidedThematicTours />
    <span className="Index-sectionSpacer" />
    <AdventuresExperiences /> </div>
);

export default Index;
