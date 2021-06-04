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
    }
  },
  actions: {
    loadArticles({state, commit}) {
      axios.get(`https://newsapi.org/v2/top-headlines?apiKey=${process.env.VUE_APP_NEWSAPI_KEY}&language=${state.language}`).then(result => {
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
  },
  modules: {
  }
})
