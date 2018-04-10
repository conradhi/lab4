<template>
  <div class="col-12">
    <div class="container-fluid">
      <div class="row my-md-4 pt-md-4 pb-md-3 px-md-1 mx-md-1 ml-1 mt-3 mb-3 pb-3" id="results">
        <div class="col-12 col-md-4 text-md-left text-center">
          <h1 class="ml-md-2">My dinner: {{numberOfGuests}} people</h1>
        </div>
        <div class="col-12 col-md-4 text-md-center text-center">
          <h1>Total: {{total}}</h1>
        </div>
        <div class="col-12 col-md-4 text-md-right text-center">
          <div class="btn-group" role="group" aria-label="Basic example">
            <router-link to="/dishes" exact class="btn btn-danger btn-md-lg">Back and edit dinner</router-link>
            <router-link to="/print" exact class="btn btn-success btn-md-lg">Print your full recipe</router-link>
          </div>
        </div>
      </div>
      <div class="row justify-content-md-center">
        <div v-for="(dish, index) in menu" :id="dish.id" :key="dish.id" class="col-12 col-md-3">
          <div class="mb-md-4 pt-md-3 pb-md-3 px-md-3 pt-2 pb-3 mb-3" id="results">
            <div class="col-12" style="text-align: center;" id="title">
              <h4 class="mb-md-3">{{ menu[index].title }}</h4>
            </div>
            <div class="col-12" style="text-align: center;" id="title">
              <h4 class="mb-md-3">Price: {{ menu[index].pricePerServing }}</h4>
            </div>

            <div class="col-12" style="text-align: center;">
              <img :src="'https://spoonacular.com/recipeImages/' + menu[index].id + '-556x370.jpg'" class='img-fluid' alt='Responsive image'></img>
            </div>

            <div id="instructions" class="col-12">
              <h6 class="mt-md-3 mx-3">{{menu[index].instructions}}</h6>
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

    mounted(){
    },

    data() {
      return {
        status: 'INITIAL',
        menu:  modelInstance.loadMenu(),
        numberOfGuests: modelInstance.getNumberOfGuests(),
        total: modelInstance.getTotalPriceLoad()
      }
    }
  }

</script>

<style scoped>

a:hover,  a:visited,  a:link,  a:active {
  text-decoration: none;
}

h1{
  color: white;
}

#instructions{
  display: none;
}

#results:hover #instructions{
  display: inline;
}

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
