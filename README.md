# Metronic Dashboard Template

Metronic dashboard template base on [React Redux Starter Kit](https://github.com/davezuko/react-redux-starter-kit)

<img src="doc/imgs/Screenshot1.png" alt="ScreenShot 1" width="400"/>
<img src="doc/imgs/Screenshot2.png" alt="ScreenShot 2" width="200"/>
<img src="doc/imgs/Screenshot3.png" alt="ScreenShot 3" width="200"/>


## Installation

- Buy license of [Metronic theme](http://keenthemes.com/preview/metronic/)
- Copy Metronic *assets* folder to src/static
- Run install and start script

```
  npm install & start
```
## Source Generator
```
  npm generate
```

Supporting Types:
  - **Components**: Generate new Components `[Es6Class | Stateless]`
  - **Reducer & Action**: Generate reducer and action with name
  - **Routes**: Generate Routes `([Path] -> [Simple | BaseContainer])`

## How to change Route basePath

- add key **BASENAME** key into env in **package.json** Example:
''' json
	"deploy:prod": {
      "command": "npm run deploy",
      "env": {
        "NODE_ENV": "production",
        "DEBUG": "app:*",
        "BASENAME": "/abc"
      }
    }
'''

- change **compiler_public_path** in **config/enviroments.js**


## Todo
- Add Basic CURD Data Model Template

## Done
- ~~Core layout~~
- ~~Top Bar~~
- ~~Side Bar~~
- ~~Essential utils Loading, alert Utils~~
- ~~Base Container for new Page~~
- ~~Modal Container~~
- ~~Basic Components (Button, Tab, Input)~~
- ~~DataForm Components (sync with obj props)~~
- ~~Table Components~~
- ~~CLI Tool Generate Components `([Es6Class | Stateless])`~~
- ~~Organize Reducers,Actions~~
- ~~CLI Tool Generate Reducer & Action~~
- ~~CLI Tool Generate Routes `([Path] -> [Simple | BaseContainer])`~~
- ~~Add Login Page & generalInfo Reducer (displayName, token, avatar....)~~
