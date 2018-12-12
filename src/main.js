import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import * as firebase from 'firebase'
import AlertCmp from './components/Shared/Alert.vue'

Vue.config.productionTip = false

Vue.component('app-alert', AlertCmp)

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
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadPosts')
  }
}).$mount('#app')
