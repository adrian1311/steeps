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
			<button type="button" class="btn btn-primary"  v-on:click="registerUser" >Save User</button>
      <hr>
      <button type="button" class="btn btn-primary"  v-on:click="getUsers" >Show all users</button>
      <div>
      <hr>
      <!--ul>
        <li  v-for="item in items" :key="item.id">{{item}}</li>
      </ul-->


          <div>

          <vue-good-table
                  :columns="columns"
                  :rows="items"
                                     >
          </vue-good-table>

          </div>
      </div>
      
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
    name: "Register",
    props: {
            msg: String
        },
    
	data() {
	
      return {
		username: "",
        registration_password: "",
        items:[],
                columns: [
                    {
                        label: "Id",
                        field: "id"
                    },
                    {
                        label: "user",
                        field: "username",
                    },
                    {
                        label: "pass",
                        field: "password",
                    }
                ]
        
      }
    },
	
    methods: {
	
      registerUser() {
		const url = "http://localhost:8080/api/createUser";
	   axios.post(url, {
                    username: this.username,
                    password: this.registration_password
                })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      },

      // READ ALL USERS DB

      getUsers(){
        let self=this;
        const url = "http://localhost:8080/api/readAllUsers";
         axios.get(url)
        .then(function (response) {
          self.items = response.data;
          console.log(self.items);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
      
    }
  }
</script>
