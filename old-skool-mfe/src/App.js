import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory as history } from "history";
import "./App.css";
import MicroFrontend from "./MicroFrontend";

const { REACT_APP_OLD_SKOOL_CONTENT: oldSkoolContent } = process.env;
const Content = ({ history }) => (
  <MicroFrontend history={history} host={oldSkoolContent} name="Content" />
);
function Directions() {
  return (
    <ol
      style={{
        textAlign: "left",
        margin: "auto",
        width: "70%",
        padding: "1rem",
      }}
    >
      <li>npm i react-app-rewired</li>
      <li>add config-overrides.js to main dir (one with package.json)</li>
      <li>
        use rewire in start script -> "start": "PORT=4000 react-app-rewired
        start"
      </li>
    </ol>
  );
}
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Directions />} />
          <Route exact path="/content" element={<Content />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
