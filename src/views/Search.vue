<template>
  <v-container style="padding-top: 5em">
    <v-row>
      <v-col lg="2" offset-lg="1" class="d-none d-lg-block">
        <news-agencies :agencies="agencies" type="list" />
      </v-col>
      <v-col lg="8" md="12">
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="keyword"
              ref="keyword"
              label="Search article here"
              outlined
              clearable
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="hidden-lg-and-up">
            <news-agencies :agencies="agencies" type="slide" />
          </v-col>
        </v-row>
        <v-row>
          <article-grid-view :articles="articles" />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import NewsAgencies from '@/components/Filter/NewsAgencies.vue'
import ArticleGridView from '@/layouts/Articles/GridView.vue'

export default {
  components: {
    NewsAgencies,
    ArticleGridView,
  },
  data: () => ({
    timer: null,
  }),
  computed: {
    ...mapState({
      articles: (state) => state.articles,
      agencies: (state) => state.agencies,
      sourceId: (state) => state.sourceId,
    }),
    keyword: {
      get() {
        return this.$store.getters.keyword
      },
      set(newValue) {
        return this.$store.dispatch('setKeyword', newValue)
      },
    },
  },
  watch: {
    sourceId: {
      handler() {
        this.$store.dispatch('loadArticles', 'search')
      },
    },
    keyword: {
      handler() {
        // delay for user's typing then trigger search
        if (this.timer) {
          clearTimeout(this.timer)
          this.timer = null
        }
        this.timer = setTimeout(() => {
          this.$store.dispatch('loadArticles', 'search')
        }, 800)
      },
    },
  },
  mounted() {
    this.$refs.keyword.focus()
    if (this.articles.length === 0) this.$store.dispatch('loadArticles', 'search')
    if (this.agencies.length === 0) this.$store.dispatch('loadAgencies')
  },
}
</script>
