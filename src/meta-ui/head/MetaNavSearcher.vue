<template>
  <div class="meta-searcher" :class="ui.xsHideCls">
    <input name="searchKeywords" :placeholder="searchPlaceHolder" />
    <v-icon>mdi-magnify</v-icon>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'MetaNavSearcher',
  components: {},
  data: () => ({
    searchPlaceHolder: 'Search NFT',
  }),
  computed: {
    ...mapState(['ui']),
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.meta {
  &-searcher {
    border: 1px solid #ccc;
    border-radius: 6px;
    line-height: 36px;
    padding-left: 6px;
    padding-right: 6px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    input {
      min-width: 220px;
      user-select: none;
      outline-style: none;
    }
  }
}
</style>
