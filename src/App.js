import {Navbar} from "./components/Navbar"
import { Banner } from "./components/Banner";
import { Benefit } from "./components/Benefit";
import {Rating} from "./components/Rating";
import {Dashboards} from "./components/Dashboards";
import {Feature} from "./components/Feature";
import { Overview } from "./components/Overview";
import {Explore} from "./components/Explore";
import {People} from "./components/People";
import {Blog} from "./components/Blog";
import {Footer} from "./components/Footer";
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
  <People></People>
  <Blog></Blog>
  <Footer></Footer>
 
    </div>
  );
}

export default App;
