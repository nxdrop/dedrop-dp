<template>
  <v-container class="meta-home__search-pannel">
    <div class="inner-box">
      <v-row justify="center" align="center">
        <v-col cols="12" md="8">
          <v-text-field
            v-model="keywords"
            dense
            outlined
            type="text"
            class="meta-home-searcher"
          >
            <template #append-outer>
              <v-btn outlined plain>Search</v-btn>
            </template>
          </v-text-field>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'HomeSearch',
  components: {},
  data: () => ({
    searchPlaceHolder: '',
    keywords: '',
  }),
  computed: {},
  methods: {},
}
</script>
<style lang="scss" scoped>
.meta {
  &-home {
    &__search-pannel {
      width: 100%;
      height: calc(45vh - 64px);

      & > div.inner-box {
        flex: 1 1 100%;
        display: flex;
        height: 100%;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
      }
    }

    &-searcher {
      justify-content: flex-start;
      align-items: flex-start;
      div.v-input__append-outer {
        margin-top: 0;
      }
    }
  }
}
</style>
