<template>
  <v-app>
    <app-bar/>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './layouts/AppBar.vue'

export default {
  components: { AppBar },
  props: {
    attrs: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
