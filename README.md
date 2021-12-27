# Old Skool MFE

This is very basic MFE architecture with simple routing.
I created this project to help me understand MFE better. I wanted to load the MFEs manually so that I could understand the process better.

# Project has only Two Apps

- MFE Container (old-skool-mfe)
- MFE Container MUST HAVE setupProxy.js (src/setupProxy.js) - the proxy overcome CORS issues
- MFE Content (old-skool-mfe-content)
  The cotainer loads the MFEs. Each MFE needs to be configured so that it can be loaded my the container. This is the "old skool" part. Modern MFEs use webpack federation.

# Run

- install deps
- open old-skool-mfe

```
npm i
```

- open old-skool-mfe-content (runs on port 4000)

```
npm start
```

- open old-skool-mfe

```
npm i
```

- open old-skool-mfe-content (runs on port 5000)

```
npm start
```

Routes from http://localhost:4000:

## Steps to Add New App

- install reac-app-rewired
- add config-overrides.js to root (copy from old-skool-mfe-content)

```
module.exports = {
  webpack: (config, env) => {
    config.optimization.runtimeChunk = false;
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false,
      },
    };
    return config;
  },
};

```

- add setupProxy.js to src (copy from old-skool-mfe)

```
module.exports = (app) => {
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });
};
```

- update start script in NEW app (needs to run a new port)

```
    "start": "PORT=5000 react-app-rewired start",

```

- add the info to .env (old-skool-mfe/.env)

```
REACT_APP_OLD_SKOOL_CONTENT=http://localhost:5000
REACT_APP_QUOTE=http://localhost:5050
```

- update index.js in the NEW app (kanye-quote/index.js) (NAMING MUST MATCH eg, renderKanye, unmountKanye, must match app name "Kanye")

```
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// render micro frontend function
window.renderKanye = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId)
  );
  // serviceWorker.unregister();
};

// unmount micro frontend function
window.unmountKanye = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

// Mount to root if it is not a micro frontend
if (!document.getElementById("Kanye")) {
  ReactDOM.render(<App />, document.getElementById("root"));
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


```

- add to app to the container (old-skool-mfe/App.js)

```
const {
  REACT_APP_OLD_SKOOL_CONTENT: oldSkoolContent,
  REACT_APP_QUOTE: kanyeContent,
} = process.env;
const Quote = ({ history }) => (
  <MicroFrontend history={history} host={kanyeContent} name="Kanye" />
);
```

(Code adapted from -> https://blog.bitsrc.io/how-to-develop-microfrontends-using-react-step-by-step-guide-47ebb479cacd)
