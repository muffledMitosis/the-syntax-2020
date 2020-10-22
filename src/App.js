import React from 'react';
import './App.css';

class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), timeStr: "Loading" };
    this.countDownDate = new Date("Oct 26, 2020 00:00:00").getTime();
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

const contentCreation = [
  "Article content must be at most 2 A4 sheets long",
  "Articles must include sources/links for both images and content created ( Websites, chat forums, Wikipedia etc)",
  "Your creations must be relevant to the theme allocated for the particular week you are participating in",
  "Article Content must be submitted within the 7 days allocated for each theme apon its announcement on the website",
  "Any acts of plagiarism will result in the participants to be banned from all events conducted under the Royal College Computer Society"
];

const submission = [
  "Writers may compete individually (SOLO) or in teams of two (DUO)",
  "When submitting creations the writer or writers have the choice of including a nickname to be identified by along with their actual identification",
  "All submissions regardless of school will be accepted upon the appropriate identification details being submitted along with the article",
  "When submitting kindly submit your articles and source materials in separate documents as you will see when submitting"
];

const rectLogo = "https://firebasestorage.googleapis.com/v0/b/syntax-2020.appspot.com/o/web-images%2Frect-logo.png?alt=media&token=584c78a9-889a-4859-95ed-1a052023f448";
const wordLogo = "https://firebasestorage.googleapis.com/v0/b/syntax-2020.appspot.com/o/web-images%2Fword-logo-rccs.png?alt=media&token=e3e75061-f5f8-4d39-9552-1f29a2fce909";
const mainBack = "https://firebasestorage.googleapis.com/v0/b/syntax-2020.appspot.com/o/web-images%2Fweb-back-full.jpg?alt=media&token=ac02ed6f-65b5-4f67-b4b8-b72cdf2b989e";

function App() {

  return (
    <div>
      <div className="mainContainer">
        <img className="rectLogo" src={rectLogo} />
        <img className="wordLogo" src={wordLogo} />
        <img className="mainBack" src={mainBack} />

      </div>

      <div className="rulesAndRegulations baseGradient">
        <h2>Content Creation Guidelines</h2>
        <ul>{contentCreation.map(item=><li>{item}</li>)}</ul>
        <h2>Submission Guidelines</h2>
        <ul>{submission.map(item=><li>{item}</li>)}</ul>
      </div>
      
      <div className="baseGradient"><CountDown /><h3>more...</h3></div>
    </div>
  );
}

export default App;
