<template>
  <v-sheet class="mx-auto">
    <template v-if="type === 'list'">
      <template v-if="agencies.length === 0">
        <v-skeleton-loader
          v-for="n in 9"
          :key="n"
          type="list-item-avatar, divider"
        ></v-skeleton-loader>
      </template>
      <default-alert
        v-if="!agencies"
        description="no news sources"
        alertType="warning"
      />
      <v-list dense style="height: 85vh; overflow: auto">
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, i) in agencies"
            :key="i"
            :class="{ 'v-list-item--active': item.id === sourceId }"
            @click="choseSource(item.id)"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </template>
    <template v-else-if="type === 'slide'">
      <v-progress-linear
        indeterminate
        v-if="agencies.length === 0"
        color="indigo darken-2"
      ></v-progress-linear>
      <default-alert
        v-if="!agencies"
        description="no news sources"
        alertType="warning"
      />
      <v-slide-group show-arrows center-active>
        <v-slide-item
          v-for="(item, index) in agencies"
          v-model="sourceId"
          :key="index"
          @click="choseSource(item.id)"
        >
          <v-btn
            class="mx-2"
            :class="{
              'v-slide-item--active indigo white--text': item.id === sourceId,
            }"
            depressed
            rounded
            @click="choseSource(item.id)"
          >
            {{ item.name }}
          </v-btn>
        </v-slide-item>
      </v-slide-group>
    </template>
  </v-sheet>
</template>

<script>
import DefaultAlert from '../Alerts/Default.vue'

export default {
  name: 'FilterAgencies',
  components: {
    DefaultAlert,
  },
  props: ['type', 'agencies'],
  data: () => ({
    selectedItem: 1,
    items: [
      { text: 'Real-Time', icon: 'mdi-clock' },
      { text: 'Audience', icon: 'mdi-account' },
      { text: 'Conversions', icon: 'mdi-flag' },
      { text: 'Real-Time', icon: 'mdi-clock' },
      { text: 'Audience', icon: 'mdi-account' },
      { text: 'Conversions', icon: 'mdi-flag' },
      { text: 'Real-Time', icon: 'mdi-clock' },
      { text: 'Audience', icon: 'mdi-account' },
      { text: 'Conversions', icon: 'mdi-flag' },
      { text: 'Real-Time', icon: 'mdi-clock' },
      { text: 'Audience', icon: 'mdi-account' },
      { text: 'Conversions', icon: 'mdi-flag' },
    ],
  }),
  computed: {
    sourceId: {
      get() {
        return this.$store.getters.sourceId
      },
      set(newValue) {
        return this.$store.dispatch('setSourceId', newValue)
      },
    },
  },
  methods: {
    choseSource(source) {
      if (this.sourceId === source) this.sourceId = ''
      else this.sourceId = source
    },
  },
}
</script>
