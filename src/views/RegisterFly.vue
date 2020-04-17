<template>
  <div>
    <h1>Register new fly : </h1>
	
      <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label>From</label>
      <input type="text" class="form-control" id="from_city" v-model="from_city" placeholder="From (city)">
    </div>
    <div class="form-group col-md-6">
      <label >To</label>
      <input type="text" class="form-control" id="to_city" v-model="to_city" placeholder="To (city)">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label>Seats</label>
      <input type="text" class="form-control" id="seats" v-model="seats" placeholder="Number of seats in the plane">
    </div>
    <div class="form-group col-md-6">
      <label >Price</label>
      <input type="text" class="form-control" id="price" v-model="price" placeholder="Price">
    </div>
  </div>
  
  <button type="submit" class="btn btn-primary" v-on:click="registerFly" ><img src="../assets/create.png" width="25px" height="25px"  style="margin-right: 7px;">Create new Fly</button>
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
		    from_city: "",
        to_city: "",
        seats:"",
        price:""
        
      }
    },
	
    methods: {
	
      registerFly() {
		const url = "http://localhost:8080/api/createFly";
	   axios.post(url, {
                    from_city: this.from_city,
                    to_city: this.to_city,
                    seats: this.seats,
                    price: this.price
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
