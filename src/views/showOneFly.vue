<template>
    <div>
        <hr>
        <h1> HERE YOU CAN EDIT ONE FLY</h1>
        <hr>
    <div class="form-group">
        <input type="text" class="form-control" aria-describedby="text" placeholder="From" v-model="vuelo.from_city" readonly>
    </div>
    <div class="form-group">
        <input type="text" class="form-control"  aria-describedby="text" placeholder="To" v-model="vuelo.to_city" readonly>
    </div>
    <div class="form-group">
        <input type="text" class="form-control"  aria-describedby="text" v-model="vuelo.seats" placeholder="Price">
    </div>
    <div class="form-group">
        <input type="text" class="form-control"  aria-describedby="text" v-model="vuelo.price" placeholder="Seats">
    </div>
    <button type="submit" class="btn btn-primary" v-on:click="saveChanges">Save changes</button>
    </div>
</template>

<script>
    const axios = require('axios').default;
    export default {

        name: "showOneFly",
        props: ['vuelo'],
        data() {
            return {
                seats: this.vuelo.seats,
                price: this.vuelo.price,
                id:this.vuelo.id

            }
        },
        methods:{

            saveChanges(){
                let self=this;
                const url = "http://localhost:8080/api/changeFly";
                axios.post(url, {
                    id:self.vuelo.id,
                    seats: self.vuelo.seats,
                    price: self.vuelo.price
                })
                    .then(function (response) {
                        console.log(response.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }
</script>

<style scoped>

</style>