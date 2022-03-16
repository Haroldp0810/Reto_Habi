import React, { useState } from 'react';
import Navbar from '../Navbar';

import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';

const Hero = () => {

  return (
    <HeroContainer>
      <Navbar />
      <HeroContent>
        <HeroItems>
          <HeroH1>La mejor pizza</HeroH1>
          <HeroP>En tan solo 5 minutos</HeroP>
          <HeroBtn>Pide Ahora</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}
  


export default Hero;
