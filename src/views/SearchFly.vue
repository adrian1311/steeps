<template>
  <div>
    <h1>Search fly : </h1>

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
  
  <button class="btn btn-primary" v-on:click="show" >Search</button>


	
	
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
        vuelos:[]
        
      }
    },
	
    methods: {
	
      searchFly() {
        let self=this;
		const url = "http://localhost:8080/api/searchFly";
	   axios.post(url, {
                    from_city: self.from_city,
                    to_city: self.to_city
                })
        .then(function (response) {
          self.vuelos=response.data;
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      show(){
          console.log(this.from_city);

      }
      
    }
  }
</script>

