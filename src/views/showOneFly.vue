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
    <button type="submit" class="btn btn-primary" v-on:click="test">Submit</button>
       <h1>Here my user id:{{ vuelo.id }}</h1>
    </div>
</template>

<script>

    export default {

        name: "showOneFly",
        props: ['vuelo'],
        data() {
            return {
            }
        },
        methods:{

            test(){

                console.log(self.vuelo);
            }
        }
    }
</script>

<style scoped>

</style>