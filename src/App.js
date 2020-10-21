import React from 'react';
import './App.css';

import { useForm } from "react-hook-form";

import mainBack from './assets/web-back-full.png';
import wordLogo from './assets/word-logo-rccs.png';
import rectLogo from './assets/rect-logo.png';

class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), timeStr: "Loading" };
    this.countDownDate = new Date("Oct 22, 2020 15:37:25").getTime();
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = this.countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.setState({
      timeStr: days + "D " + hours + "H "
      + minutes + "M " + seconds + "S "
    });
  }

  render() {
    return (
      <div>
        <h1 className="timerText">{this.state.timeStr}</h1>
      </div>
    );
  }
};

function App() {

  return (
    <div>
      <div className="mainContainer">
        <img className="rectLogo" src={rectLogo} />
        <img className="wordLogo" src={wordLogo} />
        <img className="mainBack" src={mainBack} />

      </div>

      <div className="rulesAndRegulations baseGradient">
        {/* <form onSubmit={handleSubmit(onSubmit)}>
          <div><input name="fullName"  ref={register} /> <label for="fullName">Full Name</label></div>
          <div><input name="email" type="email" ref={register} /><label for="email">Email Address</label></div>
          <div><input name="admission"  ref={register} /> <label for="admission">Admission Number</label></div>
          <div><input name="team"  ref={register} /> <label for="team">Team Name (if)</label></div>
          <div><input name="exampleRequired" ref={register({ required: true })} /></div>

          {errors.exampleRequired && <span>This field is required</span>}
          
          <div><input type="submit" /></div>
        </form> */}

        <div><CountDown /></div>
      </div>
    </div>
  );
}

export default App;
