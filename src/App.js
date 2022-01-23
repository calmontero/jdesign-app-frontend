import { Switch, Route } from "react-router-dom";
import SlickCarousel from './components/SlickCarousel/SlickCarousel';
import CraftContainer from './components/CraftContainer/CraftContainer';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <CraftContainer />
      </Route>
      <Route exact path="/services">
        <SlickCarousel />
      </Route>
    </Switch>
  );
}

export default App;
