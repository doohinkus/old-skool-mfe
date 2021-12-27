import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import AppHeader from './AppHeader';
import MicroFrontend from "./MicroFrontend";
// import About from './About';

const {
  REACT_APP_BROWSE_HOST: browseHost,
  REACT_APP_RESTAURANT_HOST: restaurantHost,
  REACT_APP_CREATEREACTAPP_HOST: createreactappHost,
  REACT_APP_OLD_SKOOL_CONTENT: oldSkoolContent,
} = process.env;

// let numRestaurants = 0;
// fetch(`${process.env.REACT_APP_OLD_SKOOL_CONTENT}/manifest.json`)
//   .then((res) => res.json())
//   .then((restaurants) => {
//     numRestaurants = restaurants.length;
//   });

const Content = ({ history }) => (
  <div>
    <MicroFrontend
      history={history}
      host={"http://localhost:5000"}
      name="Content"
    />
    <Content />
  </div>
);

const Createreactapp = ({ history }) => (
  <MicroFrontend
    history={history}
    host={createreactappHost}
    name="Createreactapp"
  />
);

const MFE = () => (
  <Router>
    <Routes>
      <Route exact path="/content" redner={() => <Content />} />

      <Route exact path="/createreactapp" render={() => <Createreactapp />} />
    </Routes>
  </Router>
);

export default MFE;
