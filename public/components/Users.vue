<template>
	<div class="column is-12">
	<div class="columns">
	<div class="column is-6">

<div class="card events-card">
	  <header class="card-header">
                                <p class="card-header-title">
                                    Usuarios
                                </p>
                                <a href="#" class="card-header-icon" aria-label="more options">
                  <span class="icon">
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                  </span>
                </a>
</header>
<div class="card-table">
                                <div class="content">
                                    <table class="table is-fullwidth is-striped is-hoverable">
										<thead>
											<tr>
												<th>#</th>
												<th>Nombre</th>
												<th>Apellido</th>
												<th>Telefono</th>
											</tr>
										</thead>
                                        <tbody>
                                            <tr v-for="(user, index) in users">
												<!--
                                                <td width="5%"><i class="fa fa-bell-o"></i></td>
											-->
                                                <td>{{user.id}}</td>
                                                <td>{{user.first_name}}</td>
                                                <td>{{user.last_name}}</td>
                                                <td>{{user.phone}}</td>
                                                <td><a class="button is-small is-primary" v-on:click="selectUser(index,true)">Seleccionar</a></td>
                                                <td><a class="button is-small is-primary" v-on:click="selectUser(index,false)">Datos</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <footer class="card-footer">
                                <a href="#" class="card-footer-item">Mostrar todos</a>
                            </footer>
                        </div>
</div>
		<!--
		<table class="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Nom</th>
					<th scope="col">Cognom</th>
					<th scope="col">Telefon</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="user in users">
					<td>{{user.id}}</td>
					<td>{{user.first_name}}</td>
					<td>{{user.last_name}}</td>
					<td>{{user.phone}}</td>
				</tr>
			</tbody>
		</table>
	-->

<!--
		<ul>
			<li v-for='user in users'>
				<h3>{{user.first_name}}</h3>
				<p>by {{user.admin_id | adminIdToName admins}}</p>

				<p>{{user.phone}}</p>
			</li>
		</ul>
	-->

	<div class="column is-6">

<div v-show="ok" class="card">
  <header class="card-header">
    <p class="card-header-title">
      Configuracion
    </p>
  </header>
  <div class="card-content">
	  <div class="control">
  <input class="input" type="text" v-bind:placeholder="users[selection].first_name" disabled>
</div>
<br>
    <div class="content">
		<div class="columns">
		<div class="column is-4">
		<a class="button is-success is-fullwidth">Joc 1</a>
	</div>
		<div class="column is-4">
		<a class="button is-warning is-fullwidth">Joc 2</a>
	</div>
		<div class="column is-4">
		<a class="button is-danger is-fullwidth">Joc 3</a>
	</div>
</div>
    </div>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item">Enviar</a>
  </footer>
</div>






<div v-show="!ok" class="card events-card">
	  <header class="card-header">
                                <p class="card-header-title">
                                    Historial de Partides
                                </p>
                                <a href="#" class="card-header-icon" aria-label="more options">
                  <span class="icon">
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                  </span>
                </a>
</header>
<div class="card-table">
                                <div class="content">
                                    <table class="table is-fullwidth is-striped is-hoverable">
										<thead>
											<tr>
												<th>#</th>
												<th>Juego</th>
												<th>Dificultad</th>
												<th>Resultado</th>
											</tr>
										</thead>
                                        <tbody>
                                            <tr v-for="game in users[selection].Games">
                                                <td>{{game.id}}</td>
                                                <td>{{game.game}}</td>
                                                <td>{{game.difficulty}}</td>
                                                <td>{{game.result}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <footer class="card-footer">
                                <a href="#" class="card-footer-item">Mostrar todos</a>
                            </footer>
                        </div>


</div>



</div>
	<pre>{{users | json}}</pre>
</div>
</template>

<script>


export default {
	name: 'user',
	components: {

	},
	data(){
		return {
			users: {},
			admins: [],
			ok: true,
            selection: 0
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
                .then(users => this.$set('users', users.body))
				//.then(res => this.users = res.body)
		},
		selectUser(index, bool){
			this.$set(this.ok = bool)
            this.$set(this.selection = index)
		}
	}
}
</script>
