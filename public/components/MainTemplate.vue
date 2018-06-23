<template>
	<!--
	<div id='wrapper'>
		<nav class='navbar navbar-default'>
			<div class='container'>
				<ul class='nav navbar-nav'>
					<li><a v-link="{ path: '/' }">Home</a></li>
	        		<li><a v-link="{ path: '/admins' }">Admins</a></li>
	        		<li><a v-link="{ path: '/users' }">Users</a></li>
				</ul>
			</div>
		</nav>

		<div class='container'>
			<router-view></router-view>
		</div>
		<div class='footer'>

		</div>
	</div>
-->


	   <!-- START NAV -->
	<div id='wrapper'>
    <nav class="navbar is-white">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item brand-text">
          Prototipo v1.0.0
        </a>
                <div class="navbar-burger burger" data-target="navMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div id="navMenu" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" v-link="{ path: '/'}">
            Home
          </a>
<!--
                    <a class="navbar-item" v-link="{ path: '/admins'}">
            Admins
          </a>
-->
                    <a class="navbar-item" v-link="{ path: '/users'}">
            Usuarios
          </a>
                </div>

            </div>
        </div>
</nav	<div class='container'>
			<router-view></router-view>
		</div>
		<div class='footer'>

		</div>
	</div>>

</template>


<script>

export default {
	name: 'main',
	components: {

	},
	data() {
		return {
		}
	},
	methods: {

	}
}
 </script>
