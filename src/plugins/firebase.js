import Vue from 'vue'
import * as firebase from 'firebase/app'

import firebaseConfig from '../../firebase.config.js'

// import 'firebase/auth'
import 'firebase/firestore'

firebase.initializeApp(firebaseConfig)

Vue.prototype.$firebaseRefs = firebase
