import React from 'react';
import { Link } from 'react-router-dom';

/* Este componente muestra la previsualización de cada tarjeta */

const CharacterCard = (props) => {
  return (
    <Link to={`/character/${props.id}`}>
      <li className={`character__list__card list__${props.species}`}>
        <div className='character__list__card__box'>
          <img
            className='character__list__card__box__img'
            src={props.image}
            alt={props.name}
          />
        </div>
        <h2 className='character__list__card__name'>{props.name}</h2>
        <h3 className={`character__list__card__species ${props.species}`}>
          {props.species}
        </h3>
      </li>
    </Link>
  );
};

export default CharacterCard;
