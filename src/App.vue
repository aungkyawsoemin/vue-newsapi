<template>
  <v-app>
    <app-bar/>
    <v-main>
      <router-view></router-view>
    </v-main>
    <app-footer/>

    <debug-mode/>
    <app-snackbar/>
  </v-app>
</template>

<script>
import AppBar from '@/layouts/AppBar.vue'
import AppFooter from '@/layouts/Footer.vue'
import AppSnackbar from '@/components/AppSnackbar.vue'
import DebugMode from '@/components/DebugMode.vue'

export default {
  components:
    {
      AppBar,
      AppFooter,
      AppSnackbar,
      DebugMode,
    },
  props: {
    attrs: {
      type: Object,
      default: () => ({}),
    },
  },
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
  mounted() {
    this.$vuetify.theme.dark = this.darkMode
  },
}
</script>

<style>
  #api-toggle.v-btn--example {
    bottom: 0;
    right: 30px;
    position: fixed;
    margin: 0 0 16px 16px;
  }
</style>
