import {Navbar} from "./components/Navbar"
import { Banner } from "./components/Banner";
import { Benefit } from "./components/Benefit";
import {Rating} from "./components/Rating";
import {Dashboards} from "./components/Dashboards";
import {Feature} from "./components/Feature";
import { Overview } from "./components/Overview";
import {Explore} from "./components/Explore";
import './App.css';

function App() {
  return (
    <div className="App">
  <Navbar></Navbar>
  <Banner></Banner>
  <Benefit></Benefit>
  <Rating></Rating>
  <Dashboards></Dashboards>
  <Feature></Feature>
  <Overview></Overview>
  <Explore></Explore>
    </div>
  );
}

export default App;
