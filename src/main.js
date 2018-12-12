import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import * as firebase from 'firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyApkjED_47ENUJIa8UiqEViebdBc-JOVOs",
      authDomain: "comp-586-final.firebaseapp.com",
      databaseURL: "https://comp-586-final.firebaseio.com",
      projectId: "comp-586-final",
      storageBucket: "comp-586-final.appspot.com",
    })
  }
}).$mount('#app')
