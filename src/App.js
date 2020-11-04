import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Parallax, Background } from 'react-parallax';
import './App.css';

import {analytics, storage, db} from './utils/firebase.js';
import Countdown from './utils/countdown.js';
import * as consts from './utils/constStrings.js';

import {SoloSubmission, DuoSubmission} from './submit.js';

analytics.logEvent('page_visit');

function App() {

  return (
    <Router>
        <Switch>
          <Route path="/solo-submission"><SoloSubmission /></Route>
          <Route path="/duo-submission"><DuoSubmission /></Route>
          <Route path="/">
          <div>
      
      <Parallax strength={200}>
           <div className="testContainer">
            <div className="mainContainer">
              <img className="rectLogo" src={consts.rectLogo} />
              <img className="wordLogo" src={consts.wordLogo} />

            </div>
           </div>
           <Background className="custom-bg">
            <img className="mainBack" src={consts.week_two_main_back} />
           </Background>
      </Parallax>
      <div className="baseGradient themeDiv">
        <h1>"Technology developments in extraterrestrial exploration"</h1>
      </div>
      <div className="rulesAndRegulations baseGradient">
        
        <div className="baseGradient">
        <div className="subContainer">
          <img onClick={()=>window.location = "/solo-submission"} src={consts.soloLogo}/>
          <img onClick={()=>window.location = "/duo-submission"} src={consts.duoLogo}/>
        </div>
      </div>
        <h2>What Is Syntax?</h2>
        {consts.intro.map(item=><p>{item}</p>)}
        <h2>Content Creation Guidelines</h2>
        <ul>{consts.contentCreation.map(item=><li>{item}</li>)}</ul>
        <h2>Submission Guidelines</h2>
        <ul>{consts.submission.map(item=><li>{item}</li>)}</ul>
      </div>
      
      
    </div>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
