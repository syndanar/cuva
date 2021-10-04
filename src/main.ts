import Vue from 'vue';
import './plugins/axios';
// eslint-disable-next-line
// @ts-ignore
import VueMask from 'v-mask';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.use(VueMask);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
