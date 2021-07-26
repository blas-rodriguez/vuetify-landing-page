import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n);
const messages = {
    es: {

        hello: {
            world: 'Hola Mundo!'
        },
        spanish: 'Español',
        english: 'Inglés',
        portuguese: 'Portuguez'
    },
    en: {
        hello: {
            world: 'Hello World!'
        },
        spanish: 'Spanish',
        english: 'English',
        portuguese: 'Portuguese'
    },
    br: {
        hello: {
            world: 'Hello World!'
        },
        spanish: 'Spanish',
        english: 'English',
        portuguese: 'Portuguez'
    },
    fr: {
        hello: {
            world: 'Hello World!'
        },
        spanish: 'Spanish',
        english: 'English',
        portuguese: 'Portuguez'
    },
    it: {
        hello: {
            world: 'Hello World!'
        },
        spanish: 'Spanish',
        english: 'English',
        portuguese: 'Portuguez'
    }

}

export const i18n = new VueI18n({
    locale: 'es',
    fallbackLocale: 'en',
    messages
})