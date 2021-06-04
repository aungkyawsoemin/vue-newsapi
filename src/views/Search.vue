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
          <v-col v-for="n in 9" v-show="articles.length == 0" :key="n" cols="12" lg="4" md="4" sm="6" xs="12">
            <card-loaders />
          </v-col>
          <v-col v-for="item in articles" v-show="articles.length != 0" :key="item.uuid" lg="4" md="4" sm="6" xs="12">
            <news-card :article="item" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NewsCard from '../components/Cards/NewsCard.vue'
import NewsAgencies from '../components/Filter/NewsAgencies.vue'
import CardLoaders from '../components/Loaders/CardLoaders.vue'
import { mapState } from 'vuex'

export default {
  name: 'Search',
  components: {
    NewsCard,
    NewsAgencies,
    CardLoaders,
  },
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
        return this.$store.dispatch("setKeyword", newValue)
      }
    },
  },
  watch: {
    sourceId: {
      handler(sourceId) {
        this.$store.dispatch('loadArticles')
      }
    },
    keyword: {
      handler(keyword) {
        this.$store.dispatch('loadArticles')
      }
    }
  },
  mounted() {
    if(this.articles.length == 0) this.$store.dispatch('loadArticles')
    if(this.agencies.length == 0) this.$store.dispatch('loadAgencies')
  }
}
</script>
