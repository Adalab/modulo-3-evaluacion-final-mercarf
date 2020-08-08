import React from 'react';
import { Link } from 'react-router-dom';
import Leyend from './Leyend';
// Imágenes/iconos importados
import humanLogo from '../images/humano.svg';
import womanLogo from '../images/mujer-color.png';
import manLogo from '../images/hombre.png';
import alienLogo from '../images/extraterrestre.png';
import femaleLogo from '../images/femenino.svg';
import maleLogo from '../images/masculino.svg';
import unknownLogo from '../images/interrogacion-color.svg';
import aliveLogo from '../images/corazon-rosa.svg';
import deathLogo from '../images/tumba.png';

// Función para renderizar el estado correcto de cada personaje
const CharacterDetail = (props) => {
  const changeImgStatus = () => {
    if (props.status === 'Alive') {
      return aliveLogo;
    } else if (props.status === 'Dead') {
      return deathLogo;
    } else {
      return unknownLogo;
    }
  };

  // Función para renderizar la especie correcta de cada personaje
  const changeImgSpecies = () => {
    if (props.species === 'Human') {
      return humanLogo;
    } else if (props.species === 'Alien') {
      return alienLogo;
    }
  };

  // Función para renderizar la especie correcta de cada personaje
  const changeImgGender = () => {
    if (props.gender === 'Female' && props.species === 'Human') {
      return womanLogo;
    } else if (props.gender === 'Male' && props.species === 'Human') {
      return manLogo;
    } else if (props.gender === 'Female' && props.species === 'Alien') {
      return femaleLogo;
    } else if (props.gender === 'Male' && props.species === 'Alien') {
      return maleLogo;
    }
  };

  // console.log(props);

  return (
    <div className='character__detail'>
      <div className='content'>
        <div className='content__title'>
          <h3 className='content__title__name'>{props.name}</h3>
          <Link to='/'>
            <span className='content__title__icon fas fa-times'></span>
          </Link>
        </div>
        <div className='content__box'>
          <img
            className='content__box__image'
            src={props.image}
            alt={props.name}
          />
          <div className='content__description'>
            <ul className='content__description1'>
              <li>
                <h4>Origen:</h4>
                <p>{props.origin}</p>
              </li>
              <li>
                <h4>Episodios:</h4>
                <p>{props.episode}</p>
              </li>
            </ul>
            <ul className='content__description2'>
              <li>
                <h4>Especie:</h4>
                {/* <p>{props.species}</p> */}
                <img
                  src={changeImgSpecies()}
                  alt={props.species}
                  className='detail-logo'
                />
              </li>
              <li>
                <h4>Género: </h4>
                {/* <p>{props.gender}</p> */}
                <img
                  src={changeImgGender()}
                  alt={props.gender}
                  className='detail-logo'
                />
              </li>
              <li>
                <h4>Estado vital:</h4>
                {/* <p>{props.status}</p> */}
                <img
                  src={changeImgStatus()}
                  alt={props.status}
                  className='detail-logo'
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Leyend
        species={props.species}
        gender={props.gender}
        status={props.status}
      />
    </div>
  );
};

export default CharacterDetail;
