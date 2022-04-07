<template>
  <div class="meta-nft-layout">
    <div class="meta-nft__banner">
      <div class="inner-backbox"></div>
      <div class="meta-nft__avatar-wrap">
        <v-avatar :size="avatarSize" class="club-avatar">
          <img :src="azukiLogo" alt="azuki" />
        </v-avatar>
      </div>
    </div>
    <v-container>
      <router-view />
    </v-container>
  </div>
</template>

<script>
import azukiLogo from '@assets/images/azuki.jpg'
export default {
  name: 'NftLayout',
  components: {},
  data: () => ({
    azukiLogo,
    avatarSize: 130,
  }),
  computed: {
    isXs: () => this.$vuetify.breakpoint.name === 'xs',
  },
  mounted() {
    if (this.$vuetify.breakpoint.name === 'xs') {
      console.log('>>>>>>>>>>>>>>>>>>>>>>')
      this.avatarSize = 80
    }
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.meta {
  &-nft {
    &-layout {
    }

    &__banner {
      position: relative;
      width: 100%;

      & > div.inner-backbox {
        width: 100%;
        height: 260px;
        background: url('~@/assets/images/azuki_banner.jpg') no-repeat;
        background-size: 100% auto;
      }

      & > div.meta-nft__avatar-wrap {
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
@media only screen and (max-device-width: 480px) {
  .meta {
    &-nft {
      &__banner {
        & > div.inner-backbox {
          width: 100%;
          height: 180px;
          background: url('~@/assets/images/azuki_banner.jpg') no-repeat;
          background-size: auto 100%;
        }

        & > div.meta-nft__avatar-wrap {
          width: 100%;
          height: 80px;
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
}
</style>
