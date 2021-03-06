import React from 'react';
import CharacterCard from './CharacterCard';

/* Este componente muestra el listado de tarjetas de personaje */

const CharacterList = (props) => {
  //Si no hay ninguna tarjeta mostrada (al no cumplirse el includes()), aparece un error
  if (props.characters.length === 0) {
    return (
      <p className='characterNotFound'>
        {`No hay ningún personaje que coincida con la palabra "${props.filterName}"`}
      </p>
    );
  }

  // Mapeamos la lista de tarjetas de personaje, pasándole las props al CharacterCard
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
