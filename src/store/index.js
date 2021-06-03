import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { uuid } from 'vue-uuid'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [],
  },
  mutations: {
    SAVE_ARTICLES(state, articles) {
      state.articles = articles.map(v => ({...v, uuid: uuid.v1()}))
      state.articles = state.articles.filter(article => article.description != null && article.urlToImage != null)
      console.log(state.articles)
    }
  },
  actions: {
    loadArticles({commit}) {
      axios.get('https://newsapi.org/v2/top-headlines?country=sg&apiKey=099148be22804e849a0c6fe022b7cf5e').then(result => {
        commit('SAVE_ARTICLES', result.data.articles);
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
