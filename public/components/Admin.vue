<template>
	<a v-link="{ path: '/admins' }" class='btn btn-default pull-left'>< Back</a>

	<div class='col-sm-6 col-sm-offset-3'>
		<h1>{{admin.name}}</h1>

		<p>{{admin.username}}</p>

		<h2 v-if='admin.Users'>Users ({{admin.Users.length}})</h2>
		<ul>
			<li v-for='user in admin.Users'>
				<h3>{{user.first_name}}</h3>
				<i>{{user.last_name}}</i>
			</li>
		</ul>
	</div>
</template>

<script>
import routes from 'vue-router'

export default {
	name: 'admin',
	components: {
		routes
	},
	data(){
		return {
			admin: {}
		}
	},
	ready(){
		this.getAdmin()
	},
	methods: {
		getAdmin(){
			this.$http.get('/api/admins/' + this.$route.params.id)
				.then(res => this.admin = res.body)
		}
	}
}
</script>
