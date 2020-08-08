import React from 'react';
import humanLogo from '../images/humano.svg';
import womanLogo from '../images/hombre.png';
import manLogo from '../images/mujer (1).png';
import alienLogo from '../images/extraterrestre.png';
import femaleLogo from '../images/femenino.svg';
import maleLogo from '../images/masculino.svg';
import unknownLogo from '../images/interrogacion-color.svg';
import aliveLogo from '../images/corazon-color.svg';
import deathLogo from '../images/tumba.png';

const changeImg = (props) => {
  if (props.status === 'Alive') {
    return aliveLogo;
  } else if (props.status === 'Dead') {
    return deathLogo;
  } else if (props.status === 'unknown') {
    return unknownLogo;
  } else if (props.species === 'Human') {
    return humanLogo;
  } else if (props.species === 'Human' && props.gender === 'female') {
    return womanLogo;
  } else if (props.species === 'Human' && props.gender === 'male') {
    return manLogo;
  } else if (props.species === 'Alien') {
    return alienLogo;
  } else if (props.species === 'Alien' && props.gender === 'female') {
    return femaleLogo;
  } else if (props.species === 'Alien' && props.gender === 'male') {
    return maleLogo;
  }
};

export default changeImg;
