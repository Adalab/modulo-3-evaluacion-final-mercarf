import React, { useEffect, useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import '../Stylsheets/App.scss';
import getDataFromApi from '../Services/getDataFromApi';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Filters from './Filters';

const App = () => {
  const [characters, setCharacters] = useState([]);
  /* El estado por defecto del filterName será, o vacío, o el valor que haya 
  guardado en el LOCALSTORAGE */
  const [filterName, setFilterName] = useState(
    localStorage.getItem('filterName') || ''
  );
  const [filterSpecies, setFilterSpecies] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterGender, setFilterGender] = useState('all');
  console.log(filterName);

  /* Realizamos acciones en las diferentes fases del CICLO DE VIDA */

  // 1. Llamamos a los datos del API
  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  // 2. Guardamos en el LOCALSTORAGE el valor introducido en el input
  useEffect(() => {
    localStorage.setItem('filterName', filterName);
  }, [filterName]);

  /* ------------------------------------------------------------- */

  //Función que se encarga de pintar el detalle de las tarjetas
  const renderCharacterDetail = (props) => {
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

  // Función para ordenar alfabéticamente los personajes
  const orderName = () => {
    characters.sort((a, b) =>
      a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
    );
  };

  /* Función por LIFTING, recogemos el valor introducido en el input y los select
   y actualizamos el estado de cada filtro */
  const handleFilters = (data) => {
    if (data.key === 'filterName') {
      setFilterName(data.value);
    } else if (data.key === 'filterSpecies') {
      setFilterSpecies(data.value);
    } else if (data.key === 'filterStatus') {
      setFilterStatus(data.value);
    } else if (data.key === 'filterGender') {
      setFilterGender(data.value);
    }
  };

  /* Función que se encarga de pintar/filtrar las tarjetas por nombre, especie, estado y género */
  const renderFilteredCharacter = () => {
    orderName();
    return characters
      .filter((character) => {
        const characters = character.name
          .toUpperCase()
          .includes(filterName.toUpperCase());
        return characters;
      })
      .filter((character) => {
        if (filterSpecies === 'all') {
          return true;
        } else {
          return character.species === filterSpecies;
        }
      })
      .filter((character) => {
        if (filterStatus === 'all') {
          return true;
        } else {
          return character.status === filterStatus;
        }
      })
      .filter((character) => {
        if (filterGender === 'all') {
          return true;
        } else {
          return character.gender === filterGender;
        }
      });
  };

  return (
    <div className='App'>
      <header className='header'>
        <Link to='/'>
          <div className='header__img'></div>
        </Link>
      </header>
      <main className='main'>
        <Switch>
          <Route exact path='/'>
            <Filters
              filterName={filterName}
              filterSpecies={filterSpecies}
              filterStatus={filterStatus}
              filterGender={filterGender}
              handleFilters={handleFilters}
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
