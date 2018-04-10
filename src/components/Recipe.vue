<template>
  <div class="col-12 offset-md-3 col-md-9">
    <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-6">

        <div class='col-12 text-center mt-3 pb-4 pt-3' id="results">
      		<h3>{{dish.title}}</h3>
          <img :src="dish.image" class='img-fluid' alt='Responsive image'></img>
          <div class='text-center pt-4'>
            <div class="btn-group" role="group" aria-label="Basic example">
              <router-link class='btn btn-primary' to="/dishes" exact>Back to search</router-link>
              <router-link v-if="!inMenu()" class='btn btn-success' to="/dishes" exact><span v-on:click="addToMenu">Add to menu</span></router-link>
              <router-link v-if="inMenu()" class='btn btn-danger' to="/dishes" exact><span v-on:click="removeFromMenu">Remove from menu</span></router-link>
            </div>

        	</div>
      	</div>

        <div class="col-12 py-3 mt-3" id="results">
          <div class="pl-5">{{dish.instructions}}</div>

        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class='container-fluid'>
          <div class='row'>
            <div class='col-12 text-center my-3 py-3' id="results">
              INGREDIENTS FOR {{ numberOfGuests }} PEOPLE
            </div>

            <div v-for="(ingredient, index) in ingredients" :id="ingredient.id" class="col-6">

              <div class="text-center mb-4 pt-3 pb-4 px-3" id="results">
              	<div class='col-12'>
                  {{ingredients[index].amount*numberOfGuests}}
                  {{ingredients[index].unit}}
              	</div>

              	<div class='col-12'>
                  {{ingredients[index].name}}
              	</div>

              	<div class='col-12'>
                  <img :src="ingredients[index].image" class='img-fluid' alt='Responsive image' id="img"></img>
              	</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import {modelInstance} from "./DinnerModel";

  export default {

    created() {
      modelInstance.addObserver(this)
    },

    // this is called when component is removed destroyed
    // good place to remove observer
    beforeDestroy() {
      modelInstance.removeObserver(this)
    },


    mounted(){
      modelInstance.getAllInfo().then(dish => {
        this.status = 'LOADED'
        this.dish = dish
        this.ingredients = dish.extendedIngredients

      }).catch(() => {
        this.status = 'ERROR'
      })


    },
    data() {
      return {
        status: 'INITIAL',
        dish: [],
        dishhh: [],
        ingredients: [],
        numberOfGuests: modelInstance.getNumberOfGuests(),
      }
    },

    methods: {
      // in our update function we modify the the property of
      // the compoented which will cause the component to re-render
      update() {
        this.numberOfGuests = modelInstance.getNumberOfGuests()
      },

      addToMenu(){
        modelInstance.editMenu("add", this.dish)
      },

      inMenu(){
        return modelInstance.editMenu("check", this.dish)
      },

      removeFromMenu(){
        modelInstance.editMenu("remove", this.dish)
      }
    }
  }

</script>

<style scoped>

#results{
  color: white;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 20px;
}

#results:hover{
  box-shadow: 10px 10px 10px white;
  background: rgba(0, 0, 0, 0.9);
}

</style>
