import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedPosts: [
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        id: '1',
        title: 'placeholder title',
        date: '12-12-2018',
        description: 'hey now you a rockstar'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        id: '2',
        title: 'placeholder title',
        date: '12-12-2018',
        description: 'hey now you a rockstar'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        id: '3',
        title: 'placeholder title',
        date: '12-12-2018',
        description: 'hey now you a rockstar'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        id: '4',
        title: 'placeholder title',
        date: '12-12-2018',
        description: 'hey now you a rockstar'
      }
    ],
    user: null
  },
  mutations: {
     createPost(state, payload) {
      state.loadedPosts.push(payload)
    },
    setUser(state, payload) {
      state.user = payload
    }
  },
  actions: {
    createPost({ commit }, payload) {
      const post = {
        title: payload.title,
        location: payload.location,
        src: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'kfdlsfjslakl12'
      }
      // Reach out to firebase and store it
      commit('createPost', post)
    },
    signUserUp({ commit }, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              registeredPosts: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    signUserIn({ commit }, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              registeredPosts: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    }
  },
  getters: {
    loadedPosts (state) {
      return state.loadedPosts.sort((postA, postB) => {
        return postA.date > postB.date
      })
    },
    featuredPosts (state, getters) {
      return getters.loadedPosts.slice(0,5)
    },
    loadedPost (state) {
      return (postId) => {
        return state.loadedPosts.find((post) => {
          return post.id === postId
        })
      }
    },
    user(state) {
      return state.user
    }
  }
})
