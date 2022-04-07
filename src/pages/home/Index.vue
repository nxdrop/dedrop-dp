<template>
  <v-container>
    <HomeSearchPannel />
    <div class="meta-home__section-title">
      <span class="text-h5">Clubs</span>
    </div>
  </v-container>
</template>

<script>
import HomeSearchPannel from './HomeSearchPannel.vue'
export default {
  name: 'HomeIndex',
  components: {
    HomeSearchPannel,
  },
  data: () => ({}),
  computed: {},
  methods: {},
}
</script>
<style lang="scss" scoped>
.meta {
  &-home {
    &__section-title {
      color: rgba(16, 16, 16, 100);
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;

      span {
        font-weight: bold;
      }
    }
  }
}
</style>
