import React, { useState } from 'react';
import './App.css';

import Button from './components/Button';
import InputPrice from './components/InputPrice';

function App() {
  
  const [apple, changeApple] = useState(1);
  const [pear, changePear] = useState(1);

  return (
    <div className="App">
      <span>JABUKE</span>
      <img src="C:/Users/Korisnik/Desktop/gadzo/src/jabuke.png" alt=""/>   
      <InputPrice onPriceChange={e => changeApple(e.target.value)} price={apple}/>
      <Button current={apple}/>
      <br/>
      <span>KRUŠKE</span>
      <br/>
      <InputPrice onPriceChange={e => changePear(e.target.value)} price={pear}/>
      <Button current={pear}/>
    </div>
  );
}

export default App;
