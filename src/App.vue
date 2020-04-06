<template>
  <div id="app">
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
	<router-link to="/"><a class="navbar-brand">My Page</a></router-link>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	  </button>
	  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
		<div class="navbar-nav">
			<router-link to="/"><a class="nav-item nav-link">Home</a></router-link>
			<router-link to="/about"><a class="nav-item nav-link">About</a></router-link> 
			<router-link to="/register"><a class="nav-item nav-link">Register</a></router-link> 
			<router-link to="/registerFly"><a class="nav-item nav-link">Register Fly</a></router-link> 
		</div>
		</div>
	</nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@import "https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css";
</style>
