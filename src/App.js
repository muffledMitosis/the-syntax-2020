import React from 'react';
import { Parallax, Background } from 'react-parallax';
import './App.css';

import analytics from './utils/firebase.js';
import Countdown from './utils/countdown.js';
import * as consts from './utils/constStrings.js';

analytics.logEvent('page_visit');

function App() {

  return (
    <div>
      <Parallax strength={200}>
           <div className="testContainer">
            <div className="mainContainer">
              <img className="rectLogo" src={consts.rectLogo} />
              <img className="wordLogo" src={consts.wordLogo} />

            </div>
           </div>
           <Background className="custom-bg">
            <img className="mainBack" src={consts.mainBack} />
           </Background>
      </Parallax>

      <div className="rulesAndRegulations baseGradient">
        <h2>What Is Syntax?</h2>
        {consts.intro.map(item=><p>{item}</p>)}
        <h2>Content Creation Guidelines</h2>
        <ul>{consts.contentCreation.map(item=><li>{item}</li>)}</ul>
        <h2>Submission Guidelines</h2>
        <ul>{consts.submission.map(item=><li>{item}</li>)}</ul>
      </div>
      
      <div className="baseGradient"><Countdown /><h3>more...</h3></div>
    </div>
  );
}

export default App;
