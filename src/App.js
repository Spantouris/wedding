import './App.css';
import CountdownTimer from './components/countdownTimer';
import MainImage from './components/mainImage';
import Invitation from './components/invitation';
import OurStory from './components/ourStory';

function App() {
  return (
    <div className="App">
      <MainImage />
      <CountdownTimer />
      <Invitation />
      <OurStory />
      {/*<Faq />
      <Rsvp /> */}
    </div>
  );
}

export default App;
