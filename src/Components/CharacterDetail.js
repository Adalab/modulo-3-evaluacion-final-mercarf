import React from 'react';
// import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  console.log(props);

  //   const handleModalContentClick = (ev) => {
  //     ev.preventDefault();
  //   };

  //   const episodeList = props.episode.map((chap, index) => {
  //     return <li key={index}>{chap.id}</li>;
  //   });

  return (
    <div className='character__detail'>
      <div className='content'>
        <div className='content__title'>
          <h3 className='content__title__name'>{props.name}</h3>
          <span className='content__title__icon fas fa-times'></span>
        </div>
        <div className='content__box'>
          <img
            className='content__box__image'
            src={props.image}
            alt={props.name}
          />
          <ul className='content__description'>
            <li>
              <strong>Especie:</strong> {props.species}
            </li>
            <li>
              <strong>Género:</strong> {props.gender}
            </li>
            <li>
              <strong>Origen:</strong> {props.origin.name}{' '}
            </li>
            <li>
              <strong>Episodios:</strong> {props.episode.length}
            </li>
            <li>
              <strong>Estado vital:</strong> {props.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
