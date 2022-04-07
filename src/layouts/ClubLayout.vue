<template>
  <div class="meta-club-layout">
    <div class="meta-club__banner">
      <div class="inner-backbox"></div>
    </div>
    <v-container>
      <router-view />
    </v-container>
  </div>
</template>

<script>
import azukiLogo from '@assets/images/azuki.jpg'
export default {
  name: 'ClubLayout',
  components: {},
  data: () => ({
    azukiLogo,
  }),
  computed: {},
  methods: {},
}
</script>
<style lang="scss" scoped>
.meta {
  &-club {
    &-layout {
    }

    &__banner {
      position: relative;
      width: 100%;
      border: 1px solid red;

      & > div.inner-backbox {
        width: 100%;
        height: 260px;
        background: url('~@/assets/images/azuki_banner.jpg') no-repeat;
        background-size: 100% auto;
      }

      & > div.meta-club__avatar-wrap {
        width: 100%;
        height: 100px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;

        & > div.club-avatar {
          margin-top: -65px;
        }
      }
    }
  }
}
</style>
