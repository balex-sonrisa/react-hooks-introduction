import React, { useState, createContext } from 'react';

import CharPicker from './components/CharPicker';
import Character from './components/Character';

export const SharedContext = createContext();

const App = props => {
  const [selectedCharacter, setSelectedCharacter] = useState('1');
  const [destroyed, setDestroyed] = useState(false);
  const [chosenSide, setChosenSide] = useState('light');

  const sideHandler = side => {
    setChosenSide(side);
  };

  const charSelectHandler = event => {
    const charId = event.target.value;
    setSelectedCharacter(charId);
  };

  const destructionHandler = () => {
    setDestroyed(true);
  };

  let content = (
    <React.Fragment>
      <CharPicker
        side={chosenSide}
        selectedChar={selectedCharacter}
        onCharSelect={charSelectHandler}
      />
      <Character selectedChar={selectedCharacter} />
      <button onClick={sideHandler.bind(null, 'light')}>
        Light Side
      </button>
      <button onClick={sideHandler.bind(null, 'pink')}>
        Pink Side
        </button>      
        <button onClick={sideHandler.bind(null, 'dark')}>
        Dark Side
        </button>
      {chosenSide=== 'dark' && (
        <button onClick={destructionHandler}>DESTROY!</button>
      )}
    </React.Fragment>
  )

  if (destroyed) {
    content = 
    (
      <>
        <h1>Total destruction!</h1>
      </>
    );
  }
  
  return  <div>
            <SharedContext.Provider value={{ chosenSide, selectedCharacter }}>
              {content}
            </SharedContext.Provider>
          </div>;

}

export default App;
