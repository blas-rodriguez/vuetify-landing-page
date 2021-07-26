<template>
  <div>
    
      <v-menu>
        <template   v-slot:activator="{ on, attrs }">
          <v-btn icon  v-bind="attrs" v-on="on">
            <v-icon>mdi-home-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="onClick">
            <v-list-item-title>Option 1</v-list-item-title>
          </v-list-item>

          <v-list-item disabled>
            <v-list-item-title>Option 2</v-list-item-title>
          </v-list-item>

          <v-list-item @click="onClick">
            <v-list-item-title>Option 3</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    
    <!-- <v-btn
      v-for="language in languages"
      :key="language.locale"
      @click="changeLanguage(language.locale)">
        {{ language.title }}
    </v-btn> -->
  </div>
</template>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>

<script>
import { i18n } from "@/plugins/i18n";
export default {
  name: "LanguageComponent",
  computed: {
    languages() {
      return [
        { locale: "es", title: this.$t("spanish") },
        { locale: "en", title: this.$t("english") },
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
