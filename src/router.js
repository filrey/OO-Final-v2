import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import CreatePost from '@/components/Post/CreatePost.vue'
import Posts from '@/components/Post/Posts.vue'
import Profile from '@/components/User/Profile.vue'
import Signin from '@/components/User/Signin.vue'
import Signup from '@/components/User/Signup.vue'
import Post from '@/components/Post/Post.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/CreatePost',
      name: 'CreatePost',
      component: CreatePost
    },
    {
      path: '/Posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/Posts/:id',
      name: 'Post',
      props: true,
      component: Post
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/Signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/Signup',
      name: 'Signup',
      component: Signup
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
