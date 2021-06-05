<template>
  <v-container style="padding-top: 5em">
    <v-row class="hidden-lg-and-up">
      <v-col cols="12">
        <news-agencies :agencies="agencies" type="slide" />
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="2" offset-lg="1" class="d-none d-lg-block">
        <news-agencies :agencies="agencies" type="list" />
      </v-col>
      <v-col lg="8" md="12">
        <article-grid-view :articles="articles" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import ArticleGridView from '@/layouts/Articles/GridView.vue'
import NewsAgencies from '@/components/Filter/NewsAgencies.vue'

export default {
  components: {
    ArticleGridView,
    NewsAgencies,
  },
  computed: {
    ...mapState({
      articles: (state) => state.articles,
      agencies: (state) => state.agencies,
      sourceId: (state) => state.sourceId,
    }),
  },
  watch: {
    sourceId: {
      handler() {
        this.$store.dispatch('loadArticles')
      },
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (vm.$store.getters.keyword !== '') vm.$store.dispatch('resetKeyword')
    })
  },
  mounted() {
    if (this.articles.length === 0) this.$store.dispatch('loadArticles')
    if (this.agencies.length === 0) this.$store.dispatch('loadAgencies')
  },
}
</script>
