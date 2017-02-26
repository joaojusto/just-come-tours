import React from 'react';

import '../css/Index';
import Hero from '../components/Hero';
import Event from '../components/Event';
import TourismPrograms from '../components/TourismPrograms';

const Index = () => (
  <div className="Index">
    <Hero />
    <Event />
    <span className="Index-sectionSpacer" />
    <TourismPrograms />
  </div>
);

export default Index;
