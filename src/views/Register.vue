<template>
  <div>
    <h1>Register</h1>
	
		<form>
			<div class="form-group">
				<label for="exampleInputEmail1">User</label>
				<input type="text" class="form-control" aria-describedby="userHelp" placeholder="Enter user" v-model="username">
			</div>
		  <div class="form-group">
				<label for="exampleInputPassword1">Password</label>
				<input type="password" class="form-control" placeholder="Password" v-model="registration_password">
		  </div>
			<button type="button" class="btn btn-primary"  v-on:click="registerUser" >Submit</button>
	</form>
	
	
  </div>
</template>
<style>
	@import "https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css";
</style>
<script type="application/javascript">
  
  /*import http client*/
   const axios = require('axios').default;
  
  
  export default {
    
	data() {
	
      return {
		username: "",
        registration_password: ""
        
      }
    },
	
    methods: {
	
      registerUser() {
		const url = "http://localhost:8080/steps/api/createUser";
	   axios.post(url, {
                    username: this.username,
                    registration_password: this.registration_password
                })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
      
    }
  }
</script>
