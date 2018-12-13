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
        title: 'Squirrels Take Over CSUN',
        date: '12-12-2018',
        description: 'hey now you a rockstar'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        id: '2',
        title: 'Clouds are nice',
        date: '12-12-2018',
        description: 'hey now you a rockstar'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        id: '3',
        title: 'The Fastest Bird?',
        date: '12-12-2018',
        description: 'hey now you a rockstar'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        id: '4',
        title: 'You like space so do we',
        date: '12-12-2018',
        description: 'hey now you a rockstar'
      }
    ],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    setLoadedPosts(state, payload) {
      state.loadedPosts = payload
    },
     createPost(state, payload) {
      state.loadedPosts.push(payload)
    },
    setUser(state, payload) {
      state.user = payload
    },
    setLoading(state, payload) {
      state.loading = payload
    },
    setError(state, payload) {
      state.error = payload
    },
    clearError(state) {
      state.error = null
    }
  },
  actions: {
    loadPosts({ commit }) {
      commit('setLoading', true)
      firebase.database().ref('posts').once('value')
        .then((data) => {
          const posts = []
          const obj = data.val()
          for (let key in obj) {
            posts.push({
              id: key,
              title: obj[key].title,
              description: obj[key].description,
              imageUrl: obj[key].imageUrl,
              date: obj[key].date,
              creatorId: obj[key].creatorId
            })
          }
          commit('setLoadedPosts', posts)
          commit('setLoading', false)
        })
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', false)
          }
        )
    },
    createPost({ commit, getters }, payload) {
      const post = {
        title: payload.title,
        location: payload.location,
        description: payload.description,
        creatorId: getters.user.id
      }
      let imageUrl
      let key
      firebase.database().ref('posts').push(post)
        .then((data) => {
          key = data.key
          return key
        })
        .then(key => {
          const filename = payload.image.name
          const ext = filename.slice(filename.lastIndexOf('.'))
          return firebase.storage().ref('meetups/' + key + '.' + ext).put(payload.image)
        })
        .then(fileData => {
          imageUrl = fileData.metadata.downloadURLs[0]
          return firebase.database().ref('meetups').child(key).update({ imageUrl: imageUrl })
        })
        .then(() => {
          const key = data.key
          commit('createMeetup', {
            ...post,
            imageUrl: imageUrl,
            id: key
          })
        })
        .catch((error) => {
          console.log(error)
        })
      // Reach out to firebase and store it

    },
    signUserUp({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredPosts: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    signUserIn({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredPosts: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    autoSignIn({ commit }, payload) {
      commit('setUser', { id: payload.uid, registeredMeetups: [] })
    },
    logout({ commit }) {
      firebase.auth().signOut()
      commit('setUser', null)
    },
    clearError({ commit }) {
      commit('clearError')
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
    },
    loading(state) {
      return state.loading
    },
    error(state) {
      return state.error
    }
  }
})
