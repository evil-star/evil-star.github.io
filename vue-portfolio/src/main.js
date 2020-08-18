import Vue from "vue"
import store from "./store"
import App from "./App.vue"
import "./registerServiceWorker"
import router from "./router"

import VueObserveVisibility from 'vue-observe-visibility'
import VueLazyload from 'vue-lazyload'

import VueLodash from 'vue-lodash'
import lodash from 'lodash'


Vue.use(VueObserveVisibility);
Vue.use(VueLazyload, {
	loading: require('@/assets/img/loading.gif'),
	attempt: 1,
	lazyComponent: true
});
Vue.use(VueLodash, { lodash: lodash });
Vue.config.productionTip = false;

new Vue({
	store,
	router,
	render: h => h(App)
}).$mount("#app");