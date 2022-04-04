<template>
  <div class="col-6 col-lg-3">
    <div class="card text-center">
      <div class="card-body">
        <h3 class="card-title">Name: {{hero.name}}</h3>
        <h5 class="card-text">Id: {{hero.idHero}}</h5>
        <p class="card-text">HP: {{hero.hp}}</p>
        <p class="card-text">Attack: {{hero.attack}}</p>
        <p class="card-text">Defense: {{hero.defense}}</p>
        <div class="row justify-content-around">
          <div class="col-6">
            <!-- Button trigger modal -->
            <button class="btn btn-outline-success" data-bs-toggle="modal" :data-bs-target="'#updateModal'+this.modifHero.idHero">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear"
                   viewBox="0 0 16 16">
                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
              </svg>
            </button>
            <!-- Modal -->
            <div class="modal fade" :id="'updateModal'+this.modifHero.idHero" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title text-primary" id="updateModalLabel">Modification</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                      <form action method="POST" @submit.prevent="onSubmit">
                        <div class="row">
                          <div class="col-6 p-2">
                            <label for>Name</label>
                            <input class="form-control" v-model="modifHero.name" type="text"/>
                          </div>
                          <div class="col-6 p-2">
                            <label for>HP</label>
                            <input class="form-control form-control-lg" v-model="modifHero.hp" type="number"/>
                          </div>
                          <div class="col-6 p-2">
                            <label for>Attack</label>
                            <input class="form-control form-control-lg" v-model="modifHero.attack" type="number"/>
                          </div>
                          <div class="col-6 p-2">
                            <label for>Defense</label>
                            <input class="form-control form-control-lg" v-model="modifHero.defense" type="number"/>
                          </div>
                        </div>
                        <button class="col btn btn-primary mb-2" @click="update" data-bs-dismiss="modal">Ajouter</button>
                      </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <button class="btn btn-outline-danger" @click="deleteHeroe(hero.idHero)" :id="hero.idHero">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg"
                   viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                      d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                <path fill-rule="evenodd"
                      d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"Card",
  props:["hero"],
  data(){
    return {
      modifHero:this.hero
    }
  },
  methods:{
    update(){
      axios.put('/heroes/'+this.hero.idHero, this.modifHero)
          .then(function (response) {
            console.log(response);
            location.reload();
          })
          .catch(function (error) {
            console.log(error);
          });
    },
    deleteHeroe(){
      axios.delete('/heroes/'+this.hero.idHero)
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
