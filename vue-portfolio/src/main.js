import Vue from "vue"
import App from "./App.vue"
import "./registerServiceWorker"
import router from "./router"
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(VueObserveVisibility);

Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App)
}).$mount("#app");