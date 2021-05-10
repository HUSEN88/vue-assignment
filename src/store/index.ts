import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    posts: [],
    post: {},
    isLoading: Boolean,
    isError: Boolean
  },
  actions: {
    async loadUsers ({ commit }) {
      commit('SET_LOADING', true)
        await axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(r => r.data)
        .then(users => {
          commit('SET_USERS', users)
          commit('SET_ERROR', false)
          commit('SET_LOADING', false)
        }).catch(error => {
          commit('SET_ERROR', true)
          commit('SET_LOADING', false)
        })
    },
    async loadPosts ({commit}, uid ) {
      commit('SET_LOADING', true)
      await axios
      .get('https://jsonplaceholder.typicode.com/posts?userId=' + uid)
      .then(r => r.data)
      .then(posts => {
        commit('SET_POSTS', posts);
        commit('SET_ERROR', false)
        commit('SET_LOADING', false)
      }).catch(error => {
        commit('SET_ERROR', true)
        commit('SET_LOADING', false)
      })
    },
    async loadPost ({commit}, pid ) {
      commit('SET_LOADING', true)
      await axios
      .get('https://jsonplaceholder.typicode.com/posts/' + pid)
      .then(r => r.data)
      .then(post => {
        commit('SET_POST', post)
        commit('SET_ERROR', false)
        commit('SET_LOADING', false)
      }).catch(error => {
        commit('SET_ERROR', true)
        commit('SET_LOADING', false)
      })
    }
  },
  mutations: {
    SET_USERS (state, users) {
      state.users = users
    },
    SET_POSTS (state, posts) {
      state.posts = posts;
    },
    SET_POST (state, post) {
      state.post = post;
    },
    SET_LOADING (state, isLoading) {
      state.isLoading = isLoading
    },
    SET_ERROR(state, isError) {
      state.isError = isError
    }
  }
})
 