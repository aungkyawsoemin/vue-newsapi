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
    snackBar: '',
    debug: localStorage.getItem('DebugMode') === null? false: (localStorage.getItem('DebugMode') == 'true'),
  },
  mutations: {
    SET_DARK_MODE(state, mode) {
      state.darkMode = mode
    },
    SET_ARTICLES(state, articles) {
      if(articles.length > 0) {
        state.articles = articles.map(v => ({...v, uuid: uuid.v1()}))
        state.articles = state.articles.filter(article => article.description != null && article.urlToImage != null)
      } else state.articles = articles
    },
    SET_VISITED_ARTICLES(state, article) {
      //Last In Last Out - History view
      state.visitedArticles = state.visitedArticles.filter(item => item.description !== article.description)
      state.visitedArticles.unshift(article)
    },
    SET_AGENCIES(state, agencies) {
      if(agencies.length > 0) state.agencies = agencies.filter(agency => agency.id != null)
      else state.agencies = agencies
    },
    SET_SOURCE_ID(state, name) {
      state.sourceId = name
    },
    SET_KEYWORD(state, keyword) {
      state.keyword = keyword
    },
    SET_SNACKBAR(state, snackBar) {
      state.snackBar = snackBar
    },
    SET_DEBUG(state, debug) {
      state.debug = debug
    },
  },
  actions: {
    loadArticles({state, commit}) {
      state.articles = []
      axios.get(`https://newsapi.org/v2/top-headlines?apiKey=${process.env.VUE_APP_NEWSAPI_KEY}&language=${state.language}&sources=${state.sourceId}&q=${state.keyword}`).then(result => {
        commit('SET_ARTICLES', result.data.articles)
        if(result.data.articles.length === 0) {
          commit('SET_ARTICLES', false)
        } else commit('SET_ARTICLES', result.data.articles)
      }).catch(error => {
        throw new Error(`API ${error}`)
      });
    },
    loadAgencies({state, commit}) {
      var sourceAPI = `https://newsapi.org/v2/sources?apiKey`;
      if(!state.debug) sourceAPI += `=${process.env.VUE_APP_NEWSAPI_KEY}&language=${state.language}`
      axios.get(sourceAPI).then(result => {
        if(result.data.sources.length === 0) {
          commit('SET_AGENCIES', false)
        } else commit('SET_AGENCIES', result.data.sources)
      }).catch(error => {
        commit("SET_SNACKBAR", 'Fetching error in news sources (WRONG API CALL)')
        commit('SET_AGENCIES', false)
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
      if(newValue == null || newValue == undefined) newValue = ''
      commit("SET_KEYWORD", newValue)
    },
    resetKeyword({ commit }) {
      commit("SET_KEYWORD", '')
      commit("SET_ARTICLES", [])
    },
    setSnackbar({ commit }, newValue) {
      commit("SET_SNACKBAR", newValue)
    },
    setDebug({ commit }, newValue) {
      localStorage.setItem('DebugMode', newValue)
      commit("SET_DEBUG", newValue)
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
    snackBar: (state) => {
      return state.snackBar
    },
  },
  modules: {
  }
})
