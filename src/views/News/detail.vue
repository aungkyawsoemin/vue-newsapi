<template>
  <v-container style="padding-top: 5em">
    <v-row>
      <v-col cols="12" lg="6" offset-lg="3">
        <card-loaders v-if="article == undefined"/>
        <v-card class="mx-auto" v-else>
          <v-img
            class="white--text align-end"
            height="200px"
            :src="article.urlToImage"
          >
            <v-card-title>{{ article.title }}</v-card-title>
            <v-btn
              fab
              small
              @click="$router.push({ name: 'Home' })"
              class="mx-2 card-back-button"
            >
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-btn
              fab
              small
              color="indigo"
              class="mx-2 card-edit-button d-none"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </v-img>

          <v-card-subtitle class="pb-0">{{ article.author }}</v-card-subtitle>

          <v-card-text class="text--primary body-1">
            <div>
              {{ article.description }}
            </div>

            <div>
              {{ article.content }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CardLoaders from '../../components/Loaders/CardLoaders.vue'

export default {
  components: { CardLoaders },
  data: () => ({
    article: undefined,
  }),
  computed: {
    ...mapState({
      articles: (state) => state.articles,
    }),
  },
  async mounted() {
    this.article = await this.getArticleById(this.$route.params.id)
    console.log(this.article)
  },
  methods: {
    ...mapActions({
      getArticleById: 'getArticleById'
    })
  }
}
</script>

<style scoped>
.v-card__title {
  background-color: rgb(152 152 152 / 45%) !important;
}
.card-back-button {
  position: absolute;
  top: 10px;
  left: 10px;
}
.card-edit-button {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
