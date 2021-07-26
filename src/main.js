import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueYouTubeEmbed from 'vue-youtube-embed'
import VueMdijs from 'vue-mdijs'
import { mdiMagnify } from '@mdi/js'
import { mdiTranslate } from '@mdi/js';
import CountryFlag from 'vue-country-flag'
import { i18n } from '@/plugins/i18n'
import { init } from 'emailjs-com';

Vue.component('country-flag', CountryFlag)
VueMdijs.add({ mdiMagnify })
VueMdijs.add({ mdiTranslate })
Vue.use(VueMdijs)
init("user_lNC8IjnpQ14OpeLGog5mS");
Vue.use(VueYouTubeEmbed)
Vue.config.productionTip = false



new Vue({
    components: {
        CountryFlag
    },
    i18n,
    vuetify,
    render: h => h(App)
}).$mount('#app')