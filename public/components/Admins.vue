
<template>
	<div class='col-sm-6 col-sm-offset-3'>
		<h1>Admins</h1>

		<spinner v-ref:spinner size="xl" fixed text="Loading Admins"></spinner>
		<typeahead :data="adminsNames" :on-hit="goToAdminPage" placeholder="Search admins">
			</typeahead>

		<Admin-List :list.sync="admins"></Admin-List>

	</div>
</template>

<script>
// get the component and make the template avail as <admin-list>
import AdminList from './AdminList.vue'
import { spinner, typeahead } from 'vue-strap'

export default {
	name: 'admins',
	components: {
		AdminList,
		spinner,
		typeahead
	},
	data(){
		return {
			admins: [],
			adminNames: []
		}
	},
	ready(){
		this.$refs.spinner.show()
		this.getAdmins()
	},
	methods: {
		getAdmins: function(){
			this.$http.get('/api/admins').then(function(admins){
				// set the data after ajax request
                this.$set('admins', admins.body)

                // create an array of author names
                this.adminNames = admins.body.map(admin => admin.name)

            }, function(err){
            	console.error('Error requesting authors: ')
            	console.error(err)
            }).then(() => this.$refs.spinner.hide())
		},
		goToAdminPage(name){
			let admin = this.admins.find(a => name === a.name)
			this.$router.go('/admin/' + admin.id)
		}
	}
}
</script>
