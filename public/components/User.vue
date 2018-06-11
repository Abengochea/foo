<template>
	<a v-link="{ path: '/users' }" class='btn btn-default pull-left'>< Back</a>

	<div class='col-sm-6 col-sm-offset-3'>
		<h1>{{user.title}}</h1>
	</div>
</template>

<script>
import routes from 'vue-router'

export default {
	name: 'user',
	components: {
		routes
	},
	data(){
		return {
			user: {}
		}
	},
	ready(){
		this.getUser()
	},
	methods: {
		getUser(){
			this.$http.get('/api/users/' + this.$route.params.id)
				.then(res => this.user = res.body)
		}
	}
}
</script>
