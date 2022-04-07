import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import CraftJobs from "./components/CraftJobs/CraftJobs";
import CraftSwiper from "./components/CraftSwiper/CraftSwiper";
import Home from "./components/Home/Home";
import Testimonial from "./components/Testimonial/Testimonial";
import Typography from '@mui/material/Typography';
import { makeStyles } from "@material-ui/core/styles";
import "./styles.scss";
import CraftDownloads from "./components/CraftDownloads/CraftDownloads";

const useStyles = makeStyles({
  custom: {
    color: "red",
    fontWeight: "bold"
  }
});

//import { isMobile, browserName } from "react-device-detect";
//import SlickCarousel from './components/SlickCarousel/SlickCarousel';
/*
const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
};

const MobileComponent = () => <p>"Hmmm... Why is your screen so small?"</p>;
const DesktopComponent = () => <p>"Wow, your screen is big!"</p>;

const MyComponent = () => {
  const { width } = useViewport();
  const breakpoint = 620;

  return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};
*/

function App() {
  const classes = useStyles();

  return (
    <div className="main-container" >
      <div className="craft-container" >
        <Typography gutterBottom variant="h1" component="div" align='center' className={classes.custom} >
            Judith's Designs
        </Typography>
        <span  className="font-link"  >
          Crafts creation on paper, glass, clothes, and more...
        </span>
        <Navigation />
          <div className="box overlay" >
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route exact path="/jobs">
              <CraftJobs />
            </Route>
            <Route exact path="/testimonials">
              <Testimonial />
            </Route>
            <Route exact path="/downloads">
              <CraftDownloads />
            </Route>
            <Route exact path="/services/:id">
              {/*<SlickCarousel />*/}
              <CraftSwiper />
            </Route>
          </Switch>
          </div>
      </div>
    </div>
  );
}


export default App;
