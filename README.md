# dw-with-vue

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## firebase config file
```javascript
// /firebase.config.js
export default {
  apiKey: '[api key]',
  authDomain: 'dotware.firebaseapp.com',
  databaseURL: 'https://dotware.firebaseio.com',
  projectId: 'dotware',
  storageBucket: 'dotware.appspot.com',
  messagingSenderId: [messaging sender id]',
  appId: '[app id]'
}
```

## firebase file
```javascript
// /src/plugins/firebase.js
import Vue from 'vue'
import * as firebase from 'firebase/app'

import firebaseConfig from '../../firebase.config.js'

// import 'firebase/auth'
import 'firebase/firestore'

firebase.initializeApp(firebaseConfig)

Vue.use(firebase)

```