<template>
  <v-app-bar fixed dense>
    <v-toolbar-title
      style="padding: 0"
      aria-controls
      @click="$router.push({ name: 'Home' })"
      ><span>NEWS</span><span> API</span></v-toolbar-title
    >

    <v-spacer></v-spacer>

    <v-btn icon @click="keyword = '';$router.push({ name: 'Search' })">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon @click="$router.push({ name: 'VisitedNews' })">
      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn icon @click="$vuetify.theme.dark = darkMode = !$vuetify.theme.dark">
      <v-icon v-if="$vuetify.theme.dark">mdi-weather-sunny</v-icon>
      <v-icon v-else>mdi-weather-night</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    darkMode: {
      get() {
        return this.$store.getters.darkMode
      },
      set(newValue) {
        return this.$store.dispatch('setDarkMode', newValue)
      },
    },
    keyword: {
      get() {
        return this.$store.getters.keyword
      },
      set(newValue) {
        return this.$store.dispatch('setKeyword', newValue)
      },
    },
  },
}
</script>

<style scoped>
.v-toolbar__title {
  border: 2px solid;
  padding: 0 15px !important;
}
</style>
