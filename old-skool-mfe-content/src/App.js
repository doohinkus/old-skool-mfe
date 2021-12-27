import "./App.css";
import Quote from "./Quote";
import logo from "./logo.svg";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hey Man, I'm some old skool content :) !!! Yes!!! All the content, yo!
        <img src={logo} style={{ width: "5rem" }} />
        <p>
          <Quote />
        </p>
      </header>
    </div>
  );
}

export default App;
