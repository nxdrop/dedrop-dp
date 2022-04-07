<template>
  <!-- <router-view /> -->
  <v-app>
    <MetaNavHead />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import MetaNavHead from '@ui/head/MetaNavHead.vue'
export default {
  name: 'App',
  components: { MetaNavHead },
  data: () => ({
    //
  }),
}
</script>
