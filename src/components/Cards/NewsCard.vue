<template>
  <v-card class="news-card mx-auto" max-width="400">
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>{{ title }}</v-card-title>
      <v-btn
        fab
        small
        class="mx-2 card-view-button"
        @click="$router.push({ name: 'NewsDetail', params: { id: post } })"
      >
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </v-img>

    <v-card-subtitle class="pb-0"> Number {{ post }} </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>
    <v-btn
      fab
      small
      color="indigo"
      class="mx-2 card-edit-button white--text"
      @click="edit('open')"
    >
      <v-icon>mdi-pencil</v-icon>
    </v-btn>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%"
      >
        <v-card-text class="pb-0">
          <p class="text-h5 text--primary">Change Title</p>
          <v-textarea
            counter
            label="Title"
            :rules="rules"
            v-model="newTitle"
          ></v-textarea>
        </v-card-text>
        <v-spacer></v-spacer>
        <v-card-actions class="pt-0 float-right">
          <v-btn text color="teal accent-4" @click="edit('cancel')">
            Cancel
          </v-btn>
          <v-btn text color="teal accent-4" @click="edit('save')">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: ["post"],
  name: "NewsCard",
  data: () => ({
    rules: [(v) => v.length <= 30 || "Max 30 characters"],
    title: "Top 10 Australian beaches",
    newTitle: "",
    reveal: false,
  }),
  methods: {
    edit(action) {
      this.reveal = action == 'open'? true: false
      if(action == 'open') this.newTitle = this.title
      if(action == 'save') this.title = this.newTitle
    }
  }
}
</script>

<style lang="scss" scoped>
.news-card button {
  &.card-view-button {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  &.card-edit-button {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
