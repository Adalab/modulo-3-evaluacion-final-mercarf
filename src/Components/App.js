import React, { useState } from 'react';
import '../Stylsheets/App.scss';
import getDataFromApi from '../Services/getDataFromApi';
import CharacterList from './CharacterList';

const App = () => {
  const [cards, setCards] = useState([]);

  useState(() => {
    getDataFromApi().then((data) => {
      setCards(data);
      console.log(data);
    });
  }, []);

  return (
    <div className='App'>
      <header className='header'>
        <img
          src='https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png'
          alt='Logo Rick and Morty'
          className='header__logo'
        />
      </header>
      <main className='main'>
        <CharacterList cards={cards} />
      </main>
    </div>
  );
};

export default App;
