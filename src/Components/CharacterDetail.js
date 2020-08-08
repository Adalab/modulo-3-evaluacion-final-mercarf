import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  console.log(props);

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
                <p>{props.species}</p>
              </li>
              <li>
                <h4>Género: </h4>
                <p>{props.gender}</p>
              </li>
              <li>
                <h4>Estado vital:</h4>
                <p>{props.status}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
