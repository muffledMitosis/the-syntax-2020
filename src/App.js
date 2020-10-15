import React from 'react';
import './App.css';

import { useForm } from "react-hook-form";

import mainBack from './assets/web-back-full.png';
import wordLogo from './assets/word-logo-rccs.png';
import rectLogo from './assets/rect-logo.png';

function App() {

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
      <div className="mainContainer">
        <img className="rectLogo" src={rectLogo} />
        <img className="wordLogo" src={wordLogo} />
        <img className="mainBack" src={mainBack} />
        
      </div>

      <div className="rulesAndRegulations baseGradient">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div><input name="fullName"  ref={register} /> <label for="fullName">Full Name</label></div>
          <div><input name="email" type="email" ref={register} /><label for="email">Email Address</label></div>
          <div><input name="admission"  ref={register} /> <label for="admission">Admission Number</label></div>
          <div><input name="team"  ref={register} /> <label for="team">Team Name (if)</label></div>
          <div><input name="exampleRequired" ref={register({ required: true })} /></div>

          {errors.exampleRequired && <span>This field is required</span>}
          
          <div><input type="submit" /></div>
        </form>
      </div>
    </div>
  );
}

export default App;
