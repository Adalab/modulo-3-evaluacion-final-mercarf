import React from 'react';

const CharacterCard = (props) => {
  console.log(props);
  return (
    <li className='character__list__card'>
      <div className='character__list__card__box'>
        <img
          className='character__list__card__box__img'
          src={props.image}
          alt={props.name}
        />
      </div>
      <h3 className='character__list__card__name'>{props.name}</h3>
      <span className='character__list__card__species'>{props.species}</span>
    </li>
  );
};

export default CharacterCard;
