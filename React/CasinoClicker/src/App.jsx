import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [dice, setDice] = useState(0);
    const [win, setWin] = useState(false);


    const handleOnClick = () => {
        const min = 1;
        const max = 9;
        const newValue = Math.floor(Math.random() * (max - min + 1)) + min;

        setDice(newValue);

        if (newValue ===7) setWin(true);
    };

    const handleOnWin = () => {
        setWin(true);
    }

  return (
    <>
      <div>
          <h1>Casino Clicker</h1>
          <h2>Coin value: {dice}</h2>
          {!win && <button onClick={handleOnClick}>Roll</button>}

      </div>
        {win && <h2>Congrats!</h2>}
    </>
  )
}

export default App
