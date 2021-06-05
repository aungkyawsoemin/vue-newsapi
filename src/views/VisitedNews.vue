<template>
  <v-container style="padding-top: 5em">
    <v-row>
      <v-col lg="8" offset-lg="2" md="12">
        <v-row>
          <v-col
            v-show="visitedArticles.length == 0"
            cols="12"
          >
            <v-alert prominent type="info">
              <v-row align="center">
                <v-col class="grow">
                  There are no recently viewed articles
                </v-col>
                <v-col class="shrink">
                  <v-btn @click="$router.push({ name: 'Home' })">READ ARTICLES</v-btn>
                </v-col>
              </v-row>
            </v-alert>
          </v-col>
          <v-col
            v-for="item in visitedArticles"
            v-show="visitedArticles.length != 0"
            :key="item.uuid"
            lg="4"
            md="4"
            sm="6"
            xs="12"
          >
            <news-card :article="item" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NewsCard from '../components/Cards/NewsCard.vue' 
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    NewsCard,
  },
  computed: {
    ...mapState({
      visitedArticles: (state) => state.visitedArticles,
    }),
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if(vm.$store.getters.keyword !== '') vm.$store.dispatch("resetKeyword")
    })
  },
}
</script>
