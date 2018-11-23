import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

/* import test component globally
import Test from './Test.vue'

Vue.component('test', Test);
*/

// const routes = [
//   { path: '/footer', component: Home_footer }
// ]

// Vue.use(VueRouter);

// const router = new VueRouter({
//   routes
// });

Vue.use(VueResource);

Vue.filter('to-uppercase',function(value){
  return value.toUpperCase();
});

new Vue({
  el: '#app',
  render: h => h(App),

});


