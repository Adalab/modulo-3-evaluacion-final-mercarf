import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const charactersList = props.characters.map((character) => {
    return (
      <CharacterCard
        key={character.id}
        id={character.id}
        image={character.image}
        name={character.name}
        species={character.species}
      />
    );
  });
  return <ul className='character__list'>{charactersList}</ul>;
};

export default CharacterList;
