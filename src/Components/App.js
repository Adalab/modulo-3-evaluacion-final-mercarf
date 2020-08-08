import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../Stylsheets/App.scss';
import getDataFromApi from '../Services/getDataFromApi';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Filters from './Filters';

const App = () => {
  const [characters, setCharacters] = useState([]);

  /* En el estado por defecto recogemos el valor que haya guardado en el LOCALSTORAGE
  para conservar la ultima búsqueda realizada por el usuario */
  const [filterName, setFilterName] = useState('');

  // const getLS = JSON.parse(localStorage.getItem('filterName'));
  // if (getLS !== null) {
  //   setFilterName(getLS);
  // }

  // Realizamos acciones en las diferentes fases del CICLO DE VIDA
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  // Guardamos en el LOCALSTORAGE el valor introducido en el input
  useEffect(() => {
    localStorage.setItem('filterName', JSON.stringify(filterName));
  }, [filterName]);

  // Funcion por LIFTING, recogemos el valor introducido en el input
  const handleFilterName = (data) => {
    setFilterName(data.value);
    console.log(data);
  };

  //Funcion que se encarga de pintar el detalle de las tarjetas
  const renderCharacterDetail = (props) => {
    // console.log(props);
    const routeCharacterId = props.match.params.characterId;
    const character = characters.find(
      (character) => character.id === parseInt(routeCharacterId)
    );
    // Si el url de la barra de busqueda/personaje existe, me pintas la tarjeta, sino el error
    if (character) {
      return (
        <CharacterDetail
          name={character.name}
          image={character.image}
          species={character.species}
          gender={character.gender}
          origin={character.origin.name}
          status={character.status}
          episode={character.episode.length}
        />
      );
    } else {
      return (
        <p className='characterDetailNotFound'>
          El personaje que buscas no existe
        </p>
      );
    }
  };

  // Funcion para ordenar alfabeticamente los personajes
  const orderName = () => {
    characters.sort((a, b) =>
      a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
    );
  };

  /* Funcion que se encarga de pintar/filtrar las tarjetas que coincidan con las 
 letras introducidas en el input */
  const renderFilteredCharacter = () => {
    orderName();
    return characters.filter((character) => {
      const characters = character.name
        .toUpperCase()
        .includes(filterName.toUpperCase());
      return characters;
    });
  };

  return (
    <div className='App'>
      <header className='header'>
        <div className='header__img'></div>
      </header>
      <main className='main'>
        <Switch>
          <Route exact path='/'>
            <Filters
              filterName={filterName}
              handleFilterName={handleFilterName}
            />
            <CharacterList
              filterName={filterName}
              characters={renderFilteredCharacter()}
            />
          </Route>
          <Route
            path='/character/:characterId'
            render={renderCharacterDetail}
          />
        </Switch>
      </main>
    </div>
  );
};

export default App;
