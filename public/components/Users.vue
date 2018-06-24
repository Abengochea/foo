<template>
	<div class="column is-12">
	<div class="columns">
	<div class="column is-6">

<div class="card events-card">
	  <header class="card-header">
                                <p class="card-header-title">
                                    Usuarios
                                </p>
<!--
                                <a href="#" class="card-header-icon" aria-label="more options">
                  <span class="icon">
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                  </span>
                </a>
-->
</header>
<div class="card-table">
                                <div class="content">
                                    <table class="table is-fullwidth is-striped is-hoverable">
										<thead>
											<tr>
												<th>#</th>
												<th>Nombre</th>
												<th>Apellido</th>
												<th></th>
												<th></th>
												<th></th>
											</tr>
										</thead>
                                        <tbody>
                                            <tr v-for="user in users">
												<!--
                                                <td width="5%"><i class="fa fa-bell-o"></i></td>
											-->
                                                <td>{{user.id}}</td>
                                                <td>{{user.first_name}}</td>
                                                <td>{{user.last_name}}</td>
                                                <td><a class="button is-small is-primary" v-on:click="selectUser(user,true)">Seleccionar</a></td>
                                                <td><a class="button is-small is-primary" v-on:click="selectUser(user,false)">Datos</a></td>
                                                <td><a class="button is-small is-danger" v-on:click="selectUser(user,false)">Eliminar</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <footer class="card-footer">
<!--                                <a href="#" class="card-footer-item">Mostrar todos</a>
-->
<a class="card-footer-item button is-success is-small is-centered">Alta Usuario</a>
                            </footer>
                        </div>
</div>
	


	<div class="column is-6">

<div v-show="ok" class="card">
  <header class="card-header">
    <p class="card-header-title">
      Configuracion
    </p>
  </header>
  <div class="card-content">
	  <div class="control">
  <label class="label" type="text">{{selection.first_name}} {{selection.last_name}}</label>
</div>
<br>
    <div class="content">
		<div class="columns">
		<div class="column is-4">
		<a class="button is-success is-fullwidth" v-on:click="selectJoc(0)">Velocidad</a>
	</div>
		<div class="column is-4">
		<a class="button is-warning is-fullwidth" v-on:click="selectJoc(1)" >Memoria</a>
	</div>
		<div class="column is-4">
		<a class="button is-danger is-fullwidth" v-on:click="selectJoc(2)" >Piano</a>
	</div>
</div>
    </div>
	  <!-- prova de arduino envian data-->
	  <form method="post" action="/api/arduino">
		  <!--
		  <input class="input" type="test" name="game" value="joc">
		   <input class="input" type="test" name="diff" value="diff">
		   <input class="input" type="test" name="result" value="resultat">
		   <input class="input" type="test" name="user_id" value="2">
		   <input type="submit">
	   -->

		   <div class="field is-grouped">
  <p class="label is-small">Usuario/Jugador</p>
  <p class="control">
    <input class="input is-small" type="test" name="user_id" v-bind:value="selection.id" readonly>
</p>
</div>

		   <div class="field is-grouped">
  <p class="label is-small">Juego</p>
  <p class="control">
    <input class="input is-small" type="test" name="game" v-bind:value="joc" readonly>
</p>
</div>

<div>
	<vue-slider v-ref:slider :value.sync="diff"></vue-slider>
  </div>


		   <div class="field is-grouped">
  <p class="label is-small">Dificultad</p>
  <p class="control">
    <input class="input is-small" type="test" name="diff" v-bind:value="diff">
</p>
</div>

<div>
	<vue1-slider v-ref:slider :value.sync="neo"></vue1-slider>
  </div>

		   <div class="field is-grouped">
  <p class="label is-small">Numero de elementos</p>
  <p class="control">
    <input class="input is-small" type="test" name="neo" v-bind:value="neo">
</p>
</div>

<div>
	<vue2-slider v-ref:slider :value.sync="tout"></vue2-slider>
  </div>

		   <div class="field is-grouped">
  <p class="label is-small">TimeOut</p>
  <p class="control">
    <input class="input is-small" type="test" name="tout" v-bind:value="tout">
</p>
</div>




  <div class="control">
    <button class="button is-primary" type="submit">
      Enviar
    </button>
</div>
</div>
	   </form>

  <footer class="card-footer">
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
						  <th>Fecha</th>
					  </tr>
				  </thead>
				  <tbody>
					  <tr v-for="game in selection.Games">
						  <td>{{game.id}}</td>
						  <td>{{game.game}}</td>
						  <td>{{game.difficulty}}</td>
						  <td>{{game.result}}</td>
						  <td>{{game.created_at}}</td>
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
</div>
</template>

<script>
import vueSlider from './vue-slider.vue';
import vue1Slider from './vue1-slider.vue';
import vue2Slider from './vue2-slider.vue';
export default {
	name: 'user',
	components: {
		vueSlider,
		vue1Slider,
		vue2Slider

	},
	data(){
		return {
			users: [],
			admins: [],
			ok: true,
	                selection: 0,
			joc: 0,
			diff: 0,
			neo: 3,
			tout: 10
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
		selectUser(user, bool){
			this.$set('ok', bool)
            this.$set('selection',user)
		},
		selectJoc(joc){
			this.$set('joc', joc)
		}
	}
}
</script>
