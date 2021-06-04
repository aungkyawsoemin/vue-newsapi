<template>
  <v-app>
    <app-bar/>
    <v-main>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </v-main>
    <app-footer/>
  </v-app>
</template>

<script>
import AppBar from './layouts/AppBar.vue'
import AppFooter from './layouts/Footer.vue'

export default {
  components: { AppBar, AppFooter },
  props: {
    attrs: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
