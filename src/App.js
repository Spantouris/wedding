import "./App.css";
import CountdownTimer from "./components/countdownTimer";
import MainImage from "./components/mainImage";
import Invitation from "./components/invitation";
import OurStory from "./components/ourStory";
import FaQ from "./components/faq";
import Rsvp from "./components/rsvp";

function App() {
  return (
    <div className="App">
      <MainImage />
      <CountdownTimer />
      <Invitation />
      <OurStory />
      <FaQ />
      <Rsvp />
    </div>
  );
}

export default App;
