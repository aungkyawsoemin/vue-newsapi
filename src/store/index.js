import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { uuid } from 'vue-uuid'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [],
    agencies: [],
    language: 'en',
    sourceId: '',
    keyword: '',
  },
  mutations: {
    SAVE_ARTICLES(state, articles) {
      state.articles = articles.map(v => ({...v, uuid: uuid.v1()}))
      state.articles = state.articles.filter(article => article.description != null && article.urlToImage != null)
    },
    SAVE_AGENCIES(state, agencies) {
      state.agencies = agencies.filter(agency => agency.id != null)
    },
    SET_SOURCE_ID(state, name) {
      state.sourceId = name;
    },
    SET_KEYWORD(state, keyword) {
      state.keyword = keyword;
    },
  },
  actions: {
    loadArticles({state, commit}) {
      axios.get(`https://newsapi.org/v2/top-headlines?apiKey=${process.env.VUE_APP_NEWSAPI_KEY}&language=${state.language}&sources=${state.sourceId}&q=${state.keyword}`).then(result => {
        commit('SAVE_ARTICLES', result.data.articles);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    },
    loadAgencies({state, commit}) {
      axios.get(`https://newsapi.org/v2/sources?apiKey=${process.env.VUE_APP_NEWSAPI_KEY}&language=${state.language}`).then(result => {
        commit('SAVE_AGENCIES', result.data.sources);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    },
    getArticleById({state}, id) {
      return state.articles.find(article => article.uuid == id)
    },
    setSourceId({ commit }, newValue) {
      commit("SET_SOURCE_ID", newValue);
    },
    setKeyword({ commit }, newValue) {
      commit("SET_KEYWORD", newValue);
    },
    resetKeyword({ commit }) {
      commit("SET_KEYWORD", '')
      commit("SAVE_ARTICLES", [])
    },
  },
  getters: {
    sourceId: (state) => {
      return state.sourceId;
    },
    keyword: (state) => {
      return state.keyword;
    },
  },
  modules: {
  }
})
