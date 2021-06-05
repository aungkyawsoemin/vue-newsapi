<template>
  <v-footer
    dark
    padless
  >
    <v-col
      cols="12"
      class="pa-0"
    >
    <v-card
      flat
      tile
      class="indigo white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="(media, id) in socialMedia"
          :key="id"
          class="mx-4 white--text"
          icon
          :href="media.link"
          target="blank"
        >
          <v-icon size="24px">
            {{ media.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        © {{ new Date().getFullYear() }} — <strong>News API</strong> — developed
        by
        <a href="https://aksm.online" target="blank" class="white--text"
          >aksm</a
        >
      </v-card-text>
    </v-card>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    socialMedia: [
      {
        link: 'https://www.facebook.com/mgaungkyawsoemin',
        icon: 'mdi-facebook',
      },
      {
        link: 'https://twitter.com/AungKyawSoeMin',
        icon: 'mdi-twitter',
      },
      {
        link: 'https://www.linkedin.com/in/aungkyaw-soemin/',
        icon: 'mdi-linkedin',
      },
      {
        link: 'https://www.instagram.com/aung.kyaw.ak/',
        icon: 'mdi-instagram',
      },
      {
        link: 'https://github.com/aungkyawsoemin',
        icon: 'mdi-github',
      },
    ],
  }),
}
</script>
