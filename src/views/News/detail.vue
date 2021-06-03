<template>
  <v-container style="padding-top: 5em">
    <v-row>
      <v-col cols="12" lg="6" offset-lg="3">
        <v-card class="mx-auto">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>Top 10 Australian beaches</v-card-title>
            <v-btn
              fab
              small
              @click="$router.push({ name: 'Home' })"
              class="mx-2 card-back-button"
            >
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-btn
              fab
              small
              color="indigo"
              class="mx-2 card-edit-button d-none"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </v-img>

          <v-card-subtitle class="pb-0"> Number 1</v-card-subtitle>

          <v-card-text class="text--primary body-1">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              tenetur non iure odio illum, id magnam similique porro vero ad.
              Deleniti maxime molestias minus sit, doloribus quo eum officia
              veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae tenetur non iure odio illum, id magnam similique porro
              vero ad. Deleniti maxime molestias minus sit, doloribus quo eum
              officia veniam. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Molestiae tenetur non iure odio illum, id magnam similique
              porro vero ad. Deleniti maxime molestias minus sit, doloribus quo
              eum officia veniam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Molestiae tenetur non iure odio illum, id magnam
              similique porro vero ad. Deleniti maxime molestias minus sit,
              doloribus quo eum officia veniam.
            </div>

            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              tenetur non iure odio illum, id magnam similique porro vero ad.
              Deleniti maxime molestias minus sit, doloribus quo eum officia
              veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae tenetur non iure odio illum, id magnam similique porro
              vero ad. Deleniti maxime molestias minus sit, doloribus quo eum
              officia veniam. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Molestiae tenetur non iure odio illum, id magnam similique
              porro vero ad. Deleniti maxime molestias minus sit, doloribus quo
              eum officia veniam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Molestiae tenetur non iure odio illum, id magnam
              similique porro vero ad. Deleniti maxime molestias minus sit,
              doloribus quo eum officia veniam.
            </div>

            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              tenetur non iure odio illum, id magnam similique porro vero ad.
              Deleniti maxime molestias minus sit, doloribus quo eum officia
              veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae tenetur non iure odio illum, id magnam similique porro
              vero ad. Deleniti maxime molestias minus sit, doloribus quo eum
              officia veniam. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Molestiae tenetur non iure odio illum, id magnam similique
              porro vero ad. Deleniti maxime molestias minus sit, doloribus quo
              eum officia veniam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Molestiae tenetur non iure odio illum, id magnam
              similique porro vero ad. Deleniti maxime molestias minus sit,
              doloribus quo eum officia veniam.
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  //
}
</script>

<style scoped>
.card-back-button {
  position: absolute;
  top: 10px;
  left: 10px;
}
.card-edit-button {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
