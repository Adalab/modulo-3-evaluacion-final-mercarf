import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../Stylsheets/App.scss';
import Logo from '../images/Logo.png';
import getDataFromApi from '../Services/getDataFromApi';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

const App = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getDataFromApi().then((data) => {
      setCards(data);
      // console.log(data);
    });
  }, []);

  // console.log(cards);

  const renderCharacterDetail = (props) => {
    // console.log(props);
    const routeCharacterId = parseInt(props.match.params.characterId);
    const character = cards.find((card) => card.id === routeCharacterId);
    if (character) {
      return (
        <CharacterDetail
          name={character.name}
          image={character.image}
          species={character.species}
          gender={character.gender}
          origin={character.origin}
          status={character.status}
          episode={character.episode}
        />
      );
    } else {
      return <p>Producto no encontrado</p>;
    }
  };

  return (
    <div className='App'>
      <header className='header'>
        <img src={Logo} alt='Logo Rick and Morty' className='header__logo' />
      </header>
      <main className='main'>
        <Switch>
          <Route exact path='/'>
            <CharacterList cards={cards} />
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
