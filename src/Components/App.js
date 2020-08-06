import React, { useState } from 'react';
import '../Stylsheets/App.css';
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
      <header>Rick and Morty</header>
      <main>
        <CharacterList cards={cards} />
      </main>
    </div>
  );
};

export default App;
