import React, { useState } from 'react';
import '../Stylsheets/leyend.scss';
import humanLogo from '../images/humano.svg';
import womanLogo from '../images/hombre.png';
import manLogo from '../images/mujer-color.png';
import alienLogo from '../images/extraterrestre.png';
import femaleLogo from '../images/femenino.svg';
import maleLogo from '../images/masculino.svg';
import unknownLogo from '../images/interrogacion-color.svg';
import aliveLogo from '../images/corazon-rosa.svg';
import deathLogo from '../images/tumba.png';

const Leyend = (props) => {
  const [activeCollapsible, setActiveCollapsible] = useState('');

  const changeCollapsible = (ev) => {
    const clickedLeyend = ev.currentTarget.id;
    console.log(clickedLeyend);
    console.log(activeCollapsible);
    if (clickedLeyend === activeCollapsible) {
      return setActiveCollapsible('');
    } else {
      return setActiveCollapsible(clickedLeyend);
    }
  };

  return (
    <div className='leyend '>
      <div
        className={`leyend__box `}
        id='collapsible'
        onClick={changeCollapsible}
      >
        <h2 className='leyend__box__title'>Leyenda</h2>
        <i
          className={`fas fa-chevron-down ${
            activeCollapsible === 'collapsible' ? 'transform' : ''
          }`}
        />
      </div>
      <div
        className={`leyend__list ${
          activeCollapsible === 'collapsible' ? 'notHidden' : ''
        }`}
      >
        <div className='leyend__list__title1'>
          <h3 className='title'>Especies</h3>
          <div className='leyend__list__title1__species'>
            <div className='leyend__list__title1__species__human'>
              <h4>Humano</h4>
              <img
                src={humanLogo}
                alt={props.species}
                className='leyend-logo'
              />
              <ul className='gender'>
                <li className='gender__female'>
                  <p>Mujer</p>
                  <img
                    src={manLogo}
                    alt={props.species}
                    className='leyend-logo'
                  />
                </li>
                <li className='gender__male'>
                  <p>Hombre</p>
                  <img
                    src={womanLogo}
                    alt={props.gender}
                    title={props.gender}
                    className='leyend-logo'
                  />
                </li>
              </ul>
            </div>
            <div className='leyend__list__title1__species__alien'>
              <h4>Alien</h4>
              <img
                src={alienLogo}
                alt={props.species}
                className='leyend-logo'
              />
              <ul className='gender'>
                <li className='gender__female'>
                  <p>Femenino</p>
                  <img
                    src={femaleLogo}
                    alt={props.gender}
                    className='leyend-logo'
                  />
                </li>
                <li className='gender__male'>
                  <p>Masculino</p>
                  <img
                    src={maleLogo}
                    alt={props.gender}
                    className='leyend-logo'
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='leyend__list__title2'>
          <h3 className='title'>Estado</h3>
          <div className='status'>
            <div>
              <p>Desconocido</p>
              <img
                src={unknownLogo}
                alt={props.status}
                className='leyend-logo'
              />
            </div>
            <div className='alive-death'>
              <div className='alive'>
                <p>Vivo</p>
                <img
                  src={aliveLogo}
                  alt={props.status}
                  className='leyend-logo'
                />
              </div>
              <div className='death'>
                <p>Muerto</p>
                <img
                  src={deathLogo}
                  alt={props.status}
                  className='leyend-logo'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leyend;
