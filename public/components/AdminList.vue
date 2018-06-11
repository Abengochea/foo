

<template>
<ul>
	<li v-for='admin in list'>
		<h3>
			<a class='admin-name' v-link="{ path: '/admin/' + admin.id }">{{admin.name}}</a>
		</h3>
		<i>{{admin.username}}</i>
		<p>{{admin.Users.length}} Users</p>
	</li>
</ul>
</template>


<script>
export default {
	name: 'AdminList',
	props: ['list']
}
</script>

<style>
	.admin-name { cursor: pointer; color: black; text-decoration: none; }
</style>
