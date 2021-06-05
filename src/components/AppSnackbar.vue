<template>
  <v-bottom-sheet :value="snackBar !== ''" persistent>
    <v-sheet class="text-center" height="200px">
      <v-btn class="mt-6" text color="error" @click="snackBar = ''">
        close
      </v-btn>
      <div class="py-3">
        <div v-html="snackBar"></div>
      </div>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
export default {
  computed: {
    snackBar: {
      get() {
        return this.$store.getters.snackBar
      },
      set(newValue) {
        return this.$store.dispatch('setSnackbar', newValue)
      },
    },
  },
  mounted() {
    if (!this.$store.state.debug) this.snackBar = 'Click <i class="v-icon mdi mdi-play-circle green--text"></i> to test WRONG API CALL'
  },
}
</script>
