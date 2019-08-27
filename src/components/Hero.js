import React from 'react';

const Hero = ({Children, hero}) => {
  return (
    <header className={hero}>
      {Children}
    </header>
  )
}

export default Hero;

Hero.defaultProps = {
   hero: "defaultHero"
};