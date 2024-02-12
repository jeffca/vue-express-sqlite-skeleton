import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(fas);


import App from './App.vue'
import Home from '../components/Home.vue'


const routes = [
    { path: '/', name:'home', component: Home },
    
    
]


const router = createRouter({
  history: createWebHashHistory(),
    mode: 'hash',
    routes,
});

const app = createApp(App);
app.use(router);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use({
  install() {
    app.config.globalProperties.$fa = FontAwesomeIcon;
  }
});
app.mount('#app');