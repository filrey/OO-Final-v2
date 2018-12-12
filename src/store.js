import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedPosts: [
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        id: '1',
        title: 'placeholder title',
        date: '12-12-2018',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        id: '2',
        title: 'placeholder title',
        date: '12-12-2018',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        id: '3',
        title: 'placeholder title',
        date: '12-12-2018',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        id: '4',
        title: 'placeholder title',
        date: '12-12-2018',
      }
    ],
    user: {
      id: 'owefruoige',
      registeredPosts: ['weijfnwijne']
    }
  },
  mutations: {

  },
  actions: {

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
    }
  }
})
