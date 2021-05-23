import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueRouter from 'vue-router';
import AuthHandler from './components/AuthHandler';
import ImageHome from './components/ImageHome';
import ImageUploadForm from './components/ImageUploadForm';

Vue.use(VueRouter);

Vue.config.productionTip = false
export const router= new VueRouter({
  mode:'history',
  routes: [
    {path: '/', component: ImageHome},
    {path: '/upload', component: ImageUploadForm},
    {path: '/oauth2/callback', component: AuthHandler}
  ]
});

new Vue({
  router,
  store: store,
  render: h => h(App),
}).$mount('#app')
