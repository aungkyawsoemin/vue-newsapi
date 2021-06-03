<template>
  <v-container style="padding-top: 5em">
    <v-row>
      <v-col lg="2" offset-lg="1" class="d-none d-lg-block">
        <news-agencies />
      </v-col>
      <v-col lg="8" md="12">
        <v-row>
          <v-col v-for="n in 24" :key="n" lg="4" md="4">
            <news-card />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NewsCard from '../components/Cards/NewsCard.vue'
import NewsAgencies from '../components/Filter/NewsAgencies.vue'

export default {
  name: 'Home',
  components: {
    NewsCard,
    NewsAgencies,
  },
}
</script>
