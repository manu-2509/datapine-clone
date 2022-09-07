import {Navbar} from "./components/Navbar"
import { Banner } from "./components/Banner";
import { Benefit } from "./components/Benefit";
import {Rating} from "./components/Rating";
import {Dashboards} from "./components/Dashboards";
import './App.css';

function App() {
  return (
    <div className="App">
  <Navbar></Navbar>
  <Banner></Banner>
  <Benefit></Benefit>
  <Rating></Rating>
  <Dashboards></Dashboards>
    </div>
  );
}

export default App;
