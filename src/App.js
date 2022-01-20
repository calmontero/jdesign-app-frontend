//import './App.css';
import CraftJobs from './components/CraftJobs/CraftJobs';
import { Switch, Route } from "react-router-dom";
//import Home from './components/Home/Home';
import SlickCarousel from './components/SlickCarousel/SlickCarousel';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <CraftJobs />
      </Route>
      <Route exact path="/services">
        <SlickCarousel />
      </Route>
    </Switch>
  );
}

export default App;
