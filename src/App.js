import './App.css';
import CountdownTimer from './components/countdownTimer';
import MainImage from './components/mainImage';

function App() {
  return (
    <div className="App">
      <MainImage />
      <CountdownTimer />
      {/* <Invitation />
      <Timeline />
      <OurStore />
      <Faq />
      <Rsvp /> */}
    </div>
  );
}

export default App;
