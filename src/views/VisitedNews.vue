<template>
  <v-container style="padding-top: 5em">
    <v-row>
      <v-col lg="8" offset-lg="2" md="12">
        <v-row>
          <v-col v-show="visitedArticles.length === 0" cols="12">
            <default-alert
              description="There are no recently viewed articles"
              btnLink="Home"
              btnText="READ ARTICLES"
            />
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
import { mapState } from 'vuex'
import NewsCard from '@/components/Cards/NewsCard.vue'
import DefaultAlert from '@/components/Alerts/Basic.vue'

export default {
  components: {
    NewsCard,
    DefaultAlert,
  },
  computed: {
    ...mapState({
      visitedArticles: (state) => state.visitedArticles,
    }),
  },
}
</script>
