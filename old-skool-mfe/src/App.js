import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory as history } from "history";
import { useState } from "react";
import "./App.css";
import MicroFrontend from "./MicroFrontend";

const {
  REACT_APP_OLD_SKOOL_CONTENT: oldSkoolContent,
  REACT_APP_QUOTE: kanyeContent,
} = process.env;
const Quote = ({ history }) => (
  <MicroFrontend history={history} host={kanyeContent} name="Kanye" />
);
const Content = ({ history }) => (
  <MicroFrontend history={history} host={oldSkoolContent} name="Content" />
);
function ToggleMFEs() {
  const [showMFEs, setShowMFEs] = useState(false);
  function handleToggleMFEs() {
    setShowMFEs((mfeState) => !mfeState);
  }
  return (
    <>
      {showMFEs && (
        <>
          <Quote />
          <Content />
        </>
      )}
      <button onClick={handleToggleMFEs}>Toggle MFEs</button>
    </>
  );
}
function Directions({ showMFEs }) {
  return (
    <>
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
    </>
  );
}
function App() {
  return (
    <div className="App">
      <Router>
        <ul
          style={{
            listStyle: "none",
            padding: "1rem",
            width: "70%",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/content">first MFE</Link>
          </li>
          <li>
            <Link to="/quote">Kanye Quote</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<ToggleMFEs />} />
          <Route exact path="/content" element={<Content />} />
          <Route exact path="/quote" element={<Quote />} />
        </Routes>
      </Router>
      {/* <ToggleMFEs /> */}
    </div>
  );
}

export default App;
