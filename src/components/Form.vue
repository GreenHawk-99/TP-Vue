<template>
  <div class="row text-center p-4">
    <h2 class="text-primary">Formulaire</h2>
    <form class="card" action method="POST" @submit.prevent="onSubmit">
      <div class="row">
        <div class="col-6 p-2">
          <label for>Name</label>
          <input class="form-control" v-model="hero.name" type="text" />
        </div>
        <div class="col-6 p-2">
          <label for>HP</label>
          <input class="form-control form-control-lg" v-model="hero.hp" type="number" />
        </div>
        <div class="col-6 p-2">
          <label for>Attack</label>
          <input class="form-control form-control-lg" v-model="hero.attack" type="number" />
        </div>
        <div class="col-6 p-2">
          <label for>Defense</label>
          <input class="form-control form-control-lg" v-model="hero.defense" type="number" />
        </div>
      </div>
      <button class="col btn btn-primary mb-2" @click="store">Ajouter</button>
    </form>
  </div>
</template>

<script>
export default {
  name:"Form",
  data(){
    return{
      hero:{name:"",hp:1,attack:1,defense:1}
    }
  },
  methods:{
    store(){
      axios.post('/heroes', this.hero)
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

<style>
</style>
