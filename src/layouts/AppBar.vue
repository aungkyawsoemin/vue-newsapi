<template>
  <v-app-bar fixed dense>
    <v-toolbar-title
      style="padding: 0"
      aria-controls
      @click="$router.push({ name: 'Home' })"
      >The Daily News</v-toolbar-title
    >

    <v-spacer></v-spacer>

    <v-btn icon @click="$router.push({ name: 'Search' })">
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
  },
}
</script>
