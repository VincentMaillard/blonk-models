
## Overview

Blonk data models.





## Getting Started



Install yarn:
```js
npm install -g yarn
```

Install dependencies:
```sh
yarn
```

Steps for Linking Blonk-models in other blonk applicaiton:
```js
1. Compile the package by
    npm run compile
  it will compile the app and creat lib folder on root.
2. type 'PWD' to get the path of the package
3. go to the target application which will use the blonk-models and run the command
  'npm link Path'
  Path = the Path of the blonk-models pacakage

```

Start server:
```sh
# Start server
yarn start


```

Other gulp tasks:
```sh
# Wipe out dist and coverage directory
gulp clean

# Default task: Wipes out dist and coverage directory. Compiles using babel.
gulp
```

##### Deployment

```sh
# compile to ES5
1. yarn build

# upload lib/ to your server
2. scp -rp lib/ user@dest:/path

# install production dependencies only
3. yarn --production

# Use any process manager to start your services
4. pm2 start lib/index.js
```
