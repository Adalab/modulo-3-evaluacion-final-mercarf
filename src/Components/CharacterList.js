import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const cardList = props.cards.map((card) => {
    return (
      <CharacterCard
        key={card.id}
        id={card.id}
        image={card.image}
        name={card.name}
        species={card.species}
      />
    );
  });
  return <ul className='character__list'>{cardList}</ul>;
};

export default CharacterList;
