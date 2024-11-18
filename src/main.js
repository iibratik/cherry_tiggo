import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

import BootstrapVue3 from 'bootstrap-vue-3';
import './assets/style/main.scss'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

const app = createApp(App)

app.use(router)
app.use(BootstrapVue3)
app.use(store);
app.mount('#app')