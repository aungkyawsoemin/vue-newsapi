import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { uuid } from 'vue-uuid'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [],
    visitedArticles: [],
    agencies: [],
    language: 'en',
    sourceId: '',
    keyword: '',
    darkMode: localStorage.getItem('DarkMode') === null? false: (localStorage.getItem('DarkMode') == 'true'),
  },
  mutations: {
    SET_DARK_MODE(state, mode) {
      state.darkMode = mode
    },
    SET_ARTICLES(state, articles) {
      state.articles = articles.map(v => ({...v, uuid: uuid.v1()}))
      state.articles = state.articles.filter(article => article.description != null && article.urlToImage != null)
    },
    SET_VISITED_ARTICLES(state, article) {
      //Last In Last Out - History view
      state.visitedArticles = state.visitedArticles.filter(item => item.description !== article.description)
      state.visitedArticles.unshift(article)
    },
    SET_AGENCIES(state, agencies) {
      state.agencies = agencies.filter(agency => agency.id != null)
    },
    SET_SOURCE_ID(state, name) {
      state.sourceId = name
    },
    SET_KEYWORD(state, keyword) {
      state.keyword = keyword
    },
  },
  actions: {
    loadArticles({state, commit}) {
      state.articles = []
      axios.get(`https://newsapi.org/v2/top-headlines?apiKey=${process.env.VUE_APP_NEWSAPI_KEY}&language=${state.language}&sources=${state.sourceId}&q=${state.keyword}`).then(result => {
        commit('SET_ARTICLES', result.data.articles);
      }).catch(error => {
        throw new Error(`API ${error}`)
      });
    },
    loadAgencies({state, commit}) {
      axios.get(`https://newsapi.org/v2/sources?apiKey=${process.env.VUE_APP_NEWSAPI_KEY}&language=${state.language}`).then(result => {
        commit('SET_AGENCIES', result.data.sources);
      }).catch(error => {
        throw new Error(`API ${error}`)
      });
    },
    setDarkMode({ commit }, newValue) {
      localStorage.setItem('DarkMode', newValue)
      commit("SET_DARK_MODE", newValue)
    },
    setSourceId({ commit }, newValue) {
      commit("SET_SOURCE_ID", newValue)
    },
    setKeyword({ commit }, newValue) {
      commit("SET_KEYWORD", newValue)
    },
    resetKeyword({ commit }) {
      commit("SET_KEYWORD", '')
      commit("SET_ARTICLES", [])
    },
  },
  getters: {
    sourceId: (state) => {
      return state.sourceId
    },
    keyword: (state) => {
      return state.keyword
    },
    darkMode: (state) => {
      return state.darkMode
    },
    getArticleById: state => id => {
			return state.articles.find(article => article.uuid === id)
		},
  },
  modules: {
  }
})
