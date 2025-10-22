import React from 'react'
import HeaderArea from './components/HeaderArea'
import BannerArea from './components/BannerArea'
import ServiceArea from './components/ServiceArea'
import PricingPlan from './components/PricingPlan'
import Team from './components/Team'

const App = () => {
  return (
    <div>
      <HeaderArea/>
      <BannerArea/>
      <ServiceArea/>
      <PricingPlan/>
      <Team/> 
    </div>
  )
}

export default App
