import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import MainTemplate from './components/MainTemplate.vue'
import Home from './components/Home.vue'
import Admins from './components/Admins.vue'
import Admin from './components/Admin.vue'
import Users from './components/Users.vue'
import User from './components/User.vue'

Vue.use(VueResource)
Vue.use(VueRouter)

// export so we can use in components
export var router = new VueRouter()

// define routes
router.map({
	'/': {
		component: Home
	},
	'/admins': {
		component: Admins
	},
	'/admin/:id': {
		component: Admin
	},
	'/users': {
		component: Users
	},
	'/user/:id': {
		component: User
	}
})

// fallback route
router.redirect({
	'*': '/'
})

// register a filter
Vue.filter('adminIdToName', function (id, admins) {

	let admin = (admins.length > 0) ? admins.find(a => id === a.id) : ''

	if(admin.hasOwnProperty('name'))
		return admin.name
	else
		return ''
})

// expose the whole thing on element with 'app' as an id
router.start(MainTemplate, '#app')
