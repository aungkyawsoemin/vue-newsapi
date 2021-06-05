<template>
  <v-alert prominent :type="alertType">
    <v-row align="center">
      <v-col class="grow">{{ description }}</v-col>
      <v-col class="shrink" v-if="btnLink != ''">
        <v-btn @click="$router.push({ name: btnLink })">{{ btnText }}</v-btn>
      </v-col>
    </v-row>
  </v-alert>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      default: '',
      require: true,
    },
    btnLink: {
      type: String,
      default: '',
    },
    btnText: {
      type: String,
      default: 'Ok',
    },
    alertType: {
      type: String,
      default: 'info',
    },
  },
}
</script>
