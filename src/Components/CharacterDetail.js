import React from 'react';
// import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  //   console.log(props);

  //   const handleModalContentClick = (ev) => {
  //     ev.preventDefault();
  //   };
  return (
    <div className='character__detail'>
      <div className='content'>
        <h3 className='name'>{props.name}</h3>
        <div className='header'>
          <span className='header__icon fas fa-times'></span>
          <img
            className='content__box__image'
            src={props.image}
            alt={props.name}
          />
        </div>

        <ul className='content__description'>
          <li>{props.species}</li>
          <li>Origen</li>
          <li>Episodios</li>
          <li>{props.status}</li>
        </ul>
      </div>
    </div>
  );
};

export default CharacterDetail;
