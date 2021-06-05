<template>
  <v-fab-transition>
    <v-btn
      key="api"
      :color="!debug ? 'green' : 'red'"
      :fab="!debug"
      dark
      bottom
      left
      id="api-toggle"
      class="v-btn--example"
      @click="debugMode()"
    >
      <v-icon v-if="!debug">mdi-play-circle</v-icon>
      <template v-else> <v-icon>mdi-pause-circle</v-icon> Debug Mode </template>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  computed: {
    debug: {
      get() {
        return this.$store.state.debug
      },
      set(newValue) {
        return this.$store.dispatch('setDebug', newValue)
      },
    },
  },
  methods: {
    debugMode() {
      this.debug = !this.debug
      window.location.href = '/'
    },
  },
}
</script>
