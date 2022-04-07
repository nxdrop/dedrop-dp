<template>
  <v-app-bar class="meta-header" app fixed elevation="0" :color="navBackColor">
    <v-container fluid>
      <v-row>
        <MetaDropLogo />
        <MetaNavSearcher class="ms-6" />
        <v-spacer></v-spacer>
        <MetaConnector />
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import MetaDropLogo from '../DropLogo.vue'
import MetaNavSearcher from './MetaNavSearcher.vue'
import MetaConnector from '../MetaConnector.vue'

export default {
  name: 'HeadNavbar',
  components: { MetaDropLogo, MetaNavSearcher, MetaConnector },
  data: () => ({}),
  computed: {
    navBackColor() {
      return 'rgba(255,255,255,1)'
    },
  },
  methods: {},
}
</script>
<style lang="scss" scoped></style>
