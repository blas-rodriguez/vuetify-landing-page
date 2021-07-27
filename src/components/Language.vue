<template> 
      <v-menu>
        <template   v-slot:activator="{ on, attrs }">
          <v-btn icon  v-bind="attrs" v-on="on">
            <v-icon>mdi-translate </v-icon>
          </v-btn>
        </template>

        <v-list>
          
          <v-list-item  v-for="language in languages" :key="language.locale" @click="changeLanguage(language.locale)">
            <v-col> <country-flag :country='language.flag'  size='small'/></v-col>        
            <v-list-item-title>{{ language.title }}</v-list-item-title>  
          </v-list-item>


        </v-list>
      </v-menu>

</template>



<script>
import { i18n } from "@/plugins/i18n";
import CountryFlag from 'vue-country-flag'


export default {
  name: "LanguageComponent",
  computed: {
    languages() {
      return [
        { locale: "es", title: this.$t("spanish"), flag: "es" },
        { locale: "en", title: this.$t("english"),flag: "us" },
        { locale: "br", title: this.$t("portuguese"),flag: "br" },
        // { locale: "fr", title: this.$t("French"),flag: "fr" },
        // { locale: "it", title: this.$t("Italian"),flag: "it" },
      ];
    },
  },
  methods: {
    onClick() {
      // Perform an action
    },
    changeLanguage(locale) {
      i18n.locale = locale;
    },
  },
};
</script>
