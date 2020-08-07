import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../Stylsheets/App.scss';
import Logo from '../images/Logo.png';
import getDataFromApi from '../Services/getDataFromApi';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Filters from './Filters';
// import Error from './Error';

const App = () => {
  const [cards, setCards] = useState([]);
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    getDataFromApi().then((data) => {
      setCards(data);
      // console.log(data);
    });
  }, []);

  //Guardamos en el LocalStorage el valor introducido en el input
  /* useEffect(() => {
    localStorage.setItem('filterName', JSON.stringify(filterName));
  }, [filterName]); */

  // console.log(cards);

  const handleFilterName = (data) => {
    setFilterName(data.value);
  };

  const renderCharacterDetail = (props) => {
    // console.log(props);
    const routeCharacterId = props.match.params.characterId;
    const character = cards.find(
      (card) => card.id === parseInt(routeCharacterId)
    );
    console.log(character);
    if (character) {
      return (
        <CharacterDetail
          name={character.name}
          image={character.image}
          species={character.species}
          gender={character.gender}
          origin={character.origin.nam}
          status={character.status}
          episode={character.episode.length}
        />
      );
    } else {
      return <p>Este personaje no se encuentra disponible</p>;
    }
  };

  const renderFilteredCharacter = () => {
    return cards.filter((card) => {
      return card.name.toUpperCase().includes(filterName.toUpperCase());
    });
  };

  return (
    <div className='App'>
      <header className='header'>
        <img src={Logo} alt='Logo Rick and Morty' className='header__logo' />
      </header>
      <main className='main'>
        <Switch>
          <Route exact path='/'>
            <Filters
              filterName={filterName}
              handleFilterName={handleFilterName}
            />
            <CharacterList cards={renderFilteredCharacter()} />
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
