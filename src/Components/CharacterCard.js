import React from 'react';

const CharacterCard = (props) => {
  console.log(props);
  return (
    <article>
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <span>{props.species}</span>
    </article>
  );
};

export default CharacterCard;
