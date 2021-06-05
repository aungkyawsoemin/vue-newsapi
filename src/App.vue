<template>
  <v-app>
    <app-bar/>
    <v-main>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </v-main>
    <app-footer/>
    <v-fab-transition>
      <v-btn
        key="api"
        :color="!debug?'green':'red'"
        :fab="!debug"
        dark
        bottom
        left
        id="api-toggle"
        class="v-btn--example"
        @click="debugMode()"
      >
        <v-icon v-if="!debug">mdi-play-circle</v-icon>
        <template v-else>
        <v-icon>mdi-pause-circle</v-icon> Debug Mode
        </template>
      </v-btn>
    </v-fab-transition>

    <v-bottom-sheet
      :value="snackBar !== ''"
      persistent
    >
      <v-sheet
        class="text-center"
        height="200px"
      >
        <v-btn
          class="mt-6"
          text
          color="error"
          @click="snackBar = ''"
        >
          close
        </v-btn>
        <div class="py-3">
          <div v-html="snackBar"></div>
        </div>
      </v-sheet>
    </v-bottom-sheet>
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
  computed: {
    darkMode: {
      get() {
        return this.$store.getters.darkMode
      },
      set(newValue) {
        return this.$store.dispatch("setDarkMode", newValue)
      }
    },
    snackBar: {
      get() {
        return this.$store.getters.snackBar
      },
      set(newValue) {
        return this.$store.dispatch("setSnackbar", newValue)
      }
    },
    debug: {
      get() {
        return this.$store.state.debug
      },
      set(newValue) {
        return this.$store.dispatch("setDebug", newValue)
      }
    },
  },
  mounted() {
    if(!this.debug) this.snackBar = 'Click <i class="v-icon mdi mdi-play-circle"></i> to test WRONG API CALL'
    this.$vuetify.theme.dark = this.darkMode
  },
  methods: {
    debugMode() {
      this.debug = !this.debug
      window.location.href='/'
    }
  }
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
