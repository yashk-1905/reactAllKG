import BharatClockHeading from "./components/BharatClockHeading";
import BharatClockTime from "./components/BharatClockTime";
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <center className="BharatClock-container">
      <BharatClockHeading/>
      <BharatClockTime/>
    </center>
  );
}

export default App
