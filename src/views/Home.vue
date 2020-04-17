 <template>
  <div class="home">
    <br>
    <br>
    <img alt="Vue logo" src="../assets/fly.jpeg" width="750" height="400">
    <hr>
    <HelloWorld msg="WELCOME TO MY APP"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style>
	@import "https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css";
</style>
