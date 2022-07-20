import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en'
import pt from './pt'

Vue.use(VueI18n)

const messages = {
    en,
    pt
}

export default new VueI18n({
    locale: 'pt',
    messages
})
