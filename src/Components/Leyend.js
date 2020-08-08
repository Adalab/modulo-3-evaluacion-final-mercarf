import React from 'react';
import humanLogo from '../images/humano.svg';
import womanLogo from '../images/hombre.png';
import manLogo from '../images/mujer-color.png';
import alienLogo from '../images/extraterrestre.png';
import femaleLogo from '../images/femenino.svg';
import maleLogo from '../images/masculino.svg';
import unknownLogo from '../images/interrogacion-color.svg';
import aliveLogo from '../images/corazon-color.svg';
import deathLogo from '../images/tumba.png';

const Leyend = (props) => {
  return (
    <div className='leyend '>
      <h3 className='leyend__title'>Leyenda</h3>
      <ul className='leyend__list'>
        <li>
          <p>Humano</p>
          <img src={humanLogo} alt={props.species} className='leyend-logo' />
        </li>
        <li>
          <p>Hombre</p>
          <img src={manLogo} alt={props.species} className='leyend-logo' />
        </li>
        <li>
          <p>Mujer</p>
          <img
            src={womanLogo}
            alt={props.gender}
            title={props.gender}
            className='leyend-logo'
          />
        </li>
        <li>
          <p>Alien</p>
          <img src={alienLogo} alt={props.species} className='leyend-logo' />
        </li>
        <li>
          <p>Alien Femenino</p>
          <img src={femaleLogo} alt={props.gender} className='leyend-logo' />
        </li>
        <li>
          <p>Alien Masculino</p>
          <img src={maleLogo} alt={props.gender} className='leyend-logo' />
        </li>
        <li>
          <p>Estado Desconocido</p>
          <img src={aliveLogo} alt={props.status} className='leyend-logo' />
          <img src={unknownLogo} alt={props.status} className='leyend-logo' />
          <img src={deathLogo} alt={props.status} className='leyend-logo' />
        </li>
        <li>
          <p>Vivo</p>
          <img src={aliveLogo} alt={props.status} className='leyend-logo' />
        </li>
        <li>
          <p>Muerto</p>
          <img src={deathLogo} alt={props.status} className='leyend-logo' />
        </li>
      </ul>
    </div>
  );
};

export default Leyend;
