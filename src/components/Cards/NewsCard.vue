<template>
  <v-card class="news-card mx-auto" max-width="400">
    <v-img
      class="white--text align-end"
      height="200px"
      :src="article.urlToImage"
    >
      <v-card-title>{{
        article.title.length > 60
          ? article.title.substring(0, 60) + "..."
          : article.title
      }}</v-card-title>
      <v-btn
        fab
        small
        class="mx-2 card-view-button"
        @click="
          $router.push({ name: 'NewsDetail', params: { id: article.uuid } })
        "
      >
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </v-img>

    <v-card-subtitle class="pb-0">{{ article.author }}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ article.description.substring(0, 100) + "..." }}</div>
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
            :maxlength="maxLength"
            :rules="rules"
            v-model="newTitle"
          ></v-textarea>
        </v-card-text>
        <v-spacer></v-spacer>
        <v-card-actions class="pt-0 float-right">
          <v-btn text color="teal accent-4" @click="edit('cancel')">
            Cancel
          </v-btn>
          <v-btn
            text
            color="teal accent-4"
            :disabled="newTitle.length > maxLength"
            @click="edit('save')"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: ['article'],
  name: 'NewsCard',
  data: () => ({
    maxLength: 100,
    rules: [(v) => v.length <= 100 || 'Max 100 characters'],
    newTitle: '',
    reveal: false,
  }),
  methods: {
    edit(action) {
      this.reveal = action === 'open'
      if (action === 'open') this.newTitle = this.article.title
      if (action === 'save') this.article.title = this.newTitle
    },
  },
}
</script>

<style lang="scss" scoped>
.news-card {
  min-height: 320px;
  .v-card__title {
    background-color: rgb(152 152 152 / 45%) !important;
  }
  button {
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
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
