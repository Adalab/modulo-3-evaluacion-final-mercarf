import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const cardList = props.cards.map((card) => {
    return (
      <CharacterCard
        key={card.id}
        image={card.image}
        name={card.name}
        species={card.species}
      />
    );
  });
  return <section>{cardList}</section>;
};

export default CharacterList;
