<template>

	<div class='col-sm-6 col-sm-offset-3'>
		<h1>List of Users</h1>

		<ul>
			<li v-for='user in users'>
				<h3>{{user.first_name}}</h3>
				<p>by {{user.admin_id | adminIdToName admins}}</p>

				<p>{{user.phone}}</p>
			</li>
		</ul>
	</div>

	<pre>{{users | json}}</pre>
</template>

<script>


export default {
	name: 'user',
	components: {

	},
	data(){
		return {
			users: {},
			admins: []
		}
	},
	ready(){
		this.getUsers()
		this.getAdmins()
	},
	methods: {
		getAdmins(){
			this.$http.get('/api/admins')
				.then(admins => this.$set('admins', admins.body))
		},
		getUsers(){
			this.$http.get('/api/users')
				.then(res => this.users = res.body)
		}
	}
}
</script>
