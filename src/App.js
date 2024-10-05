import './App.css';
import CountdownTimer from './components/countdownTimer';
import MainImage from './components/mainImage';
import Invitation from './components/invitation';

function App() {
  return (
    <div className="App">
      <MainImage />
      <CountdownTimer />
      <Invitation />
      {/* <Timeline />
      <OurStory />
      <Faq />
      <Rsvp /> */}
    </div>
  );
}

export default App;
