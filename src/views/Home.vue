<template>
  <v-container style="padding-top: 5em">
    <v-row class="hidden-lg-and-up">
      <v-col cols="12">
        <news-agencies type="slide" />
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="2" offset-lg="1" class="d-none d-lg-block">
        <news-agencies type="list" />
      </v-col>
      <v-col lg="8" md="12">
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
  name: 'Home',
  components: {
    NewsCard,
    NewsAgencies,
    CardLoaders,
  },
  computed: {
    ...mapState({
      articles: (state) => state.articles,
    }),
  },
  mounted() {
    this.$store.dispatch('loadArticles')
  }
}
</script>
