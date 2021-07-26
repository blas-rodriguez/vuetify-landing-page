import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueYouTubeEmbed from 'vue-youtube-embed'
// import firebase from 'firebase/app'
// import 'firebase/firestore'
import { i18n } from '@/plugins/i18n'
import { init } from 'emailjs-com';
init("user_lNC8IjnpQ14OpeLGog5mS");

Vue.use(VueYouTubeEmbed)
Vue.config.productionTip = false

// firebase.initializeApp({
//  Configurações do seu app
// })

// export const db = firebase.firestore()

new Vue({
    i18n,
    vuetify,
    render: h => h(App)
}).$mount('#app')