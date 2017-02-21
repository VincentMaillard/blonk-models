
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
4. pm2 start dist/index.js
```
