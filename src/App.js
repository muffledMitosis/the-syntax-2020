import React from 'react';
import './App.css';

import mainBack from './assets/web-back-full.png';
import wordLogo from './assets/word-logo-rccs.png';
import rectLogo from './assets/rect-logo.png';

function App() {
  return (
    <div className="mainContainer">
      <img className="rectLogo" src={rectLogo} />
      <img className="wordLogo" src={wordLogo} />
      <img className="mainBack" src={mainBack} />
      
    </div>
  );
}

export default App;
