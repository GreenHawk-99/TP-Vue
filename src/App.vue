<template>
  <div class="container">
    <h1 class="text-center">Vue Hero</h1>
    <div>
      <Form class="gy-4"></Form>
    </div>
    <div class="row gy-4">
      <Card v-for="hero in heros" :hero="hero"></Card>
    </div>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import Form from "./components/Form.vue";
export default {
  components: {Form, Card},
  data() {
    return {
      heros: []
    }
  },
  mounted() {
    axios.get('/heroes')
        .then((response)=> {
          this.heros=response.data._embedded.heroList
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
  }
}
</script>

<style>
</style>
