import React from 'react';

import '../css/Index';
import Hero from '../components/Hero';
import Event from '../components/Event';

const Index = () => (
  <div className="Index">
    <Hero />
    <Event />
    <span className="Index-sectionSpacer" />
  </div>
);

export default Index;
