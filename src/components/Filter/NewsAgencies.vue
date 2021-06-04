<template>
  <v-sheet class="mx-auto">
    <v-list dense nav v-if="type == 'list'" style="height: 85vh;overflow: auto;">
      <v-list-item v-for="(item, index) in agencies" :key="index" link>
        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-slide-group multiple show-arrows v-else-if="type == 'slide'">
      <v-slide-item v-for="(item, index) in agencies" :key="index" v-slot="{ active, toggle }">
        <v-btn
          class="mx-2"
          :input-value="active"
          active-class="purple white--text"
          depressed
          rounded
          @click="toggle"
        >
          {{ item.name }}
        </v-btn>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  name: 'FilterAgencies',
  props: ['type', 'agencies'],
  data: () => ({
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
}
</script>
