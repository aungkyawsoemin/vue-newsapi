<template>
  <v-row>
    <v-col
      v-for="n in 9"
      v-show="articles.length === 0"
      :key="n"
      cols="12"
      lg="4"
      md="4"
      sm="6"
      xs="12"
    >
      <card-loaders />
    </v-col>
    <v-col
      v-show="!articles"
      cols="12"
    >
      <default-alert description="There are no news articles found" alertType="warning" />
    </v-col>
    <v-col
      v-for="item in articles"
      v-show="articles.length != 0"
      :key="item.uuid"
      lg="4"
      md="4"
      sm="6"
      xs="12"
    >
      <news-card :article="item" />
    </v-col>
  </v-row>
</template>

<script>
import NewsCard from '@/components/Cards/NewsCard.vue'
import CardLoaders from '@/components/Loaders/CardLoaders.vue'
import DefaultAlert from '@/components/Alerts/Basic.vue'

export default {
  props: ['articles'],
  components: {
    NewsCard,
    CardLoaders,
    DefaultAlert,
  },
}
</script>
