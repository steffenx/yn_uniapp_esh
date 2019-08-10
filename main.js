import Vue from 'vue';
import App from './App';
import store from './store';

Vue.config.productionTip = false;
Vue.prototype.$store = store;

import './static/css/app.scss';

App.mpType = 'app'
Vue.prototype.$toast = function(title){
	uni.showToast({
		title: title,
		icon:'none'
	})
}
const app = new Vue({
    ...App,
	store
})
app.$mount()
