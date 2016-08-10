import Vue from 'vue';
import VueResource from 'vue-resource';

/**
 * Register VueResource with Vue.
 * This allows us to access the $http service on every component using this.$http*
 */
Vue.use(VueResource);


/** Instantiate Vue */
new Vue({
    el: 'body',
    components: {
        app: Vue.component('silver-screen', require('./App.vue'))
    }
});
