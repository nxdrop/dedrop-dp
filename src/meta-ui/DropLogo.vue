<template>
  <div class="meta-logo" @click="homeHandle">
    <span>
      <v-img :src="LogoImg" max-height="32" max-width="32"></v-img>
    </span>
    <span class="meta-logo-text" :class="ui.xsHideCls">{{ dappTitle }}</span>
  </div>
</template>

<script>
import LogoImg from '@assets/drop.svg'
import { mapState } from 'vuex'

import { dappTitle } from '@lib/env/dapp-env'
export default {
  name: 'DropHeadLogo',
  components: {},
  data: () => ({
    LogoImg,
    dappTitle,
  }),
  computed: {
    ...mapState(['ui']),
  },
  methods: {
    homeHandle() {
      this.$router.push('/')
    },
  },
}
</script>
<style lang="scss" scoped>
.meta {
  &-logo {
    cursor: pointer;
    display: inline-flex;
    align-items: center;

    &-text {
      margin-left: 0.5rem;
    }
  }
}
</style>
