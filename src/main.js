import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import router from './router'
import axios from './axios'

import 'animate.css'

import firebase from 'firebase/app'
import store from './store'


Vue.config.productionTip = false

const firebaseConfig = {
	apiKey: "AIzaSyB2n9VLmu23Hpng9v5x3e9fWmRI-3kUqLs",
	authDomain: "susivue.firebaseapp.com",
	databaseURL: "https://susivue.firebaseio.com",
	projectId: "susivue",
	storageBucket: "susivue.appspot.com",
	messagingSenderId: "309172066111",
	appId: "1:309172066111:web:c31f3c2465c15c50a7a58a",
	measurementId: "G-GB12TG6HTY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

firebase.auth().onAuthStateChanged(user => {
	store.dispatch('fetchUser', user)
})

new Vue({
	vuetify,
	router,
	axios,
	store,
	render: h => h(App)
}).$mount('#app')
