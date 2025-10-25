import React, { useRef } from 'react';
import HeaderArea from './components/HeaderArea';
import BannerArea from './components/BannerArea';
import ServiceArea from './components/ServiceArea';
import PricingPlan from './components/PricingPlan';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Companies from './components/Companies';
import GetInTouch from './components/GetInTouch';
import Blogs from './components/Blogs';

const App = () => {
  const serviceRef = useRef(null);

  const scrollToServices = () => {
    serviceRef.current.scrollIntoView({ behavior: 'smooth' }); 
  };

  return (
    <div>
      <HeaderArea onServicesClick={scrollToServices} />

      <BannerArea />

      <div ref={serviceRef}>
        <ServiceArea />
      </div>

      <PricingPlan />
      <Team />
      <Testimonials/>
      <Companies/>
      <GetInTouch/>
      <Blogs/>
    </div>
  );
};

export default App;
