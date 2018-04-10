<template>
  <div class="col-12">
    <div class="container-fluid">
      <div class="row my-4 pt-4 pb-3 px-1 mx-1" id="results">
        <div class="col-12 col-md-8 text-md-left text-center">
          <h1 class="ml-2">My dinner: {{numberOfGuests}} people</h1>
        </div>
        <div class="col-12 col-md-4 text-md-right text-center">
          <div class="btn-group" role="group" aria-label="Basic example">
            <router-link to="/dishes" exact class="btn btn-danger btn-lg">Back and edit dinner</router-link>
          </div>
        </div>
      </div>
      <div v-for="(dish, index) in menu" :id="dish.id" :key="dish.id" class="row mr-1 justify-content-center">
        <div class="col-12 col-md-4"><div class="col-12 mb-4 pb-4 pt-3" id="results">
            <div class="row">
              <div class="col-12 text-center">
                <h3>{{menu[index].title}}</h3>
              </div>
              <div class="col-12 text-center">
                <img :src="'https://spoonacular.com/recipeImages/' + menu[index].id + '-556x370.jpg'" class='img-fluid' alt='Responsive image'></img>
              </div>
            </div>
          </div></div>
        <div class="col-12 col-md-8 mb-md-4 ml-md-0 ml-4 py-md-3 py-3" id="results"><div class="col-12 pt-md-3">
            <h5>{{menu[index].instructions}}</h5>
          </div></div>
        <div v-for="(ingredient, index2) in menu" :id="dish.id" class="col-6 col-md-2">
          <div class="text-center mb-md-4 pt-md-3 pb-md-4 px-md-3 my-4 pb-3 pt-2" id="results">
            <div class="col-12">
              <h6>{{menu[index].extendedIngredients[index2].amount*numberOfGuests}}</h6>
            </div>
            <div class="col-12">
              <h6>{{menu[index].extendedIngredients[index2].unit}}</h6>
            </div>
            <div class="col-12">
              <h6>{{menu[index].extendedIngredients[index2].name}}</h6>
            </div>
            <div class='col-12'>
              <img :src="menu[index].extendedIngredients[index2].image" class='img-fluid' alt='Responsive image' id="img"></img>
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

h1, h6{
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
