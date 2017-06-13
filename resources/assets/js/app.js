
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('./bootstrap-vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));
Vue.component('evernote', require('./components/Evernote.vue'));
// Vue.component('evernote-tags', {props: ['evernote'], template: '<li>{{ evernote.text }}</li>'});
// Vue.prototype.$http = axios;

const app = new Vue({
    el: '#app',
	// data: {
	// 	message: 'Hello, World! 20170506 added; npm run watch;',
	//     testList: [
	//       { text: '我が名は恵みん！' },
	//       { text: 'アークウィザードを生業とし、' },
	//       { text: '最強の攻撃魔法、爆裂魔法を操る者！' },
	//       { text: 'Explosion!!!!!!' },	      
	//     ]
	// },
	methods: {
		save_tags: function(event) {
			console.log('儲存 tags 值');
			console.log(event.currentTarget.innerText.trim());			
		},
		get_tags() {
			axios.get('./evernote/tags')
				 .then(function (response) {
				 	console.log(response.data);
				 })
				 .catch(function (error) {
				 	console.log(error);
				 });
		}
	},
});
