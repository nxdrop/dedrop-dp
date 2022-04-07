<template>
  <div class="meta-connector">
    <v-btn plain class="meta-conn-btn">{{ connBtnText }}</v-btn>
  </div>
</template>

<script>
export default {
  name: 'MetaConnector',
  components: {},
  data: () => ({
    tmpCtrl: true,
  }),
  computed: {
    connBtnText: () => 'connect wallet',
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.meta {
  &-connector {
    height: 100%;

    & > button.meta-conn-btn {
      font-size: 1.05rem;
      text-transform: capitalize;
      letter-spacing: initial;
    }
  }
}
</style>
