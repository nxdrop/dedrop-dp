<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/drop.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to I18N Demo</h1>
        <p class="subheading font-weight-regular"></p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">English</h2>
        <span>
          {{ $i18n.getLocaleMessage('en').message }}
        </span>
      </v-col>
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Chinese</h2>
        <span>
          {{ $i18n.getLocaleMessage('cn').message }}
        </span>
        <v-btn color="primary">HHHHHH</v-btn>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-list>
          <v-list-item v-for="(m, idx) in importantLinks" :key="idx">
            <v-list-item-content>{{ m.text }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
  }),
}
</script>
