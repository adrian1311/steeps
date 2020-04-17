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



  <button class="btn btn-primary" v-on:click="searchFly" ><img src="../assets/search.png" width="25px" height="25px"  style="margin-right: 7px;">Search</button>

    <hr>

    <div>
      <vue-good-table
              :columns="columns"
              :rows="vuelos">
        <template slot="table-row" slot-scope="props">
                                    <span v-if="props.column.field == 'functions'" class="row-control"><button
                                            class="btn btn-primary btn-sm"
                                            v-on:click="pushResult(props.row)">Show</button></span>
          <span v-else class="row-control"> {{props.formattedRow[props.column.field]}}</span>
        </template>

      </vue-good-table>
    </div>

	
	
  </div>
</template>
<style>
	@import "https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css";
</style>
<script type="application/javascript">
  
  /*import http client*/
   const axios = require('axios').default;
  
  
  export default {
    name: "SearchFly",
    props: {
      msg: String
    },
    
	data() {
	
      return {
		    from_city: "",
        to_city: "",
        vuelos:[],
        columns: [
          {
            label: "From",
            field: "from_city"
          },
          {
            label: "To",
            field: "to_city",
          },
          {
            label: "Number of seats",
            field: "seats",
          },
          {
            label: "Price",
            field: "price",
          },
          {
            label: "Button",
            field: "functions",
          }

        ]
        
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
      pushResult(props) {
        console.log("has pinchado");
        console.log(props);
        this.$router.push({ name: 'showOneFly',params:{ vuelo:props }});

      }

      
    }
  }
</script>

