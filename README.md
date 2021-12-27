# Old Skool MFE

This is very basic MFE architecture with simple routing.
I created this project to help me understand MFE better. I wanted to load the MFEs manually so that I could understand the process better.

# Project has only Two Apps

- MFE Container (old-skool-mfe)
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

- / --> default page with steps
- /content --> some silly content
- look at .https://github.com/doohinkus/old-skool-mfe/blob/master/old-skool-mfe-content/src/index.js - New micro-apps need to follow this structure / naming convention.
