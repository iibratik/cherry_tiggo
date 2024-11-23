
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import './assets/style/main.scss'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
})
const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(store);
app.mount('#app')