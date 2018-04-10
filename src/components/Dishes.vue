

<template>
  <div class="col-12 offset-md-3 col-md-9" id="rightContainer">
		<div class="container-fluid" style="margin-top: 20px;">
			<div class="row" id="searchArea">
				<div class="col-12" style="margin-top: 10px;">
          <div class="container-fluid" id="results">

            <div class="row justify-content-center py-2">
              <h3 class="pt-md-2 col-12 text-center text-md-left">Find a dish</h3>




              <div class="col-8 col-md-4" >
                <form autocomplete="off">
                  <input type="text" class="form-control" id="search-input" placeholder="Search..." v-model="search" onkeypress="return event.keyCode != 13" v-on:keyup="getSearchOptions(search)">
                </form>
              </div>

              <div class="btn pb-2">
      				  <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      				    	{{getType()}}
      				   </button>

      				   <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <a class="dropdown-item" v-on:click="setType('all')">All</a>
      				   	<a class="dropdown-item" v-on:click="setType('appetizer')">Appetizer</a>
                  <a class="dropdown-item" v-on:click="setType('beverage')">Beverage</a>
      				    <a class="dropdown-item" v-on:click="setType('bread')">Bread</a>
                  <a class="dropdown-item" v-on:click="setType('breakfast')">Breakfast</a>
                  <a class="dropdown-item" v-on:click="setType('dessert')">Dessert</a>
                  <a class="dropdown-item" v-on:click="setType('drink')">Drink</a>
                  <a class="dropdown-item" v-on:click="setType('main+course')">Main course</a>
                  <a class="dropdown-item" v-on:click="setType('salad')">Salad</a>
                  <a class="dropdown-item" v-on:click="setType('sauce')">Sauce</a>
                  <a class="dropdown-item" v-on:click="setType('side+dish')">Side dish</a>
      				    <a class="dropdown-item" v-on:click="setType('soup')">Soup</a>
      				  </div>
    					</div>


            </div>
          </div>
				</div>


				</div>

				<div style="padding-top:30px;">
					<div class="row">
            <em v-if='status === "INITIAL"'>Loading...</em>
            <b v-else-if='status === "ERROR"'>Failed to load data, please try again</b>
              <div  v-for="(dish, index) in dishResults" class="col-12 col-md-4">

                <router-link v-bind:to="'/recipe/' + dishResults[index].id">
                  <div class="mb-4 pt-3 pb-4 px-3" id="results">
                    <div class="col-12" style="text-align: center;" id="title" v-on:click="setDishId(dishResults.results[index].id)">
                      <h6 id="title">{{ dishResults[index].title }}</h6>
                    </div>

                    <div class="col-12" style="text-align: center;" v-on:click="setDishId(dishResults[index].id)">
                      <img :src="'https://spoonacular.com/recipeImages/' + dishResults[index].id + '-556x370.jpg'" class='img-fluid' alt='Responsive image'></img>
                    </div>
                  </div>
                </router-link>

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
      modelInstance.getDishes().then(dishResults => {
        this.status = 'LOADED'
        this.dishResults = dishResults.recipes

      }).catch(() => {
        this.status = 'ERROR'
      })
    },
    data() {
      return {
        status: 'INITIAL',
        dishes: [],
        dishResults: [],
        search: "",
      }
    },

    methods: {
      setDishId: function(num){
        modelInstance.setCurrentDishId(num)
        modelInstance.setType("all")
        modelInstance.setSearch("")
      },

      getSearchOptions: function(query){
        modelInstance.setSearch(query)
        modelInstance.getDishes().then(dishResults => {
          this.status = 'LOADED'
          this.dishResults = dishResults.results

        }).catch(() => {
          this.status = 'ERROR'
        })
      },

      setType: function(type) {
        modelInstance.setType(type)
        modelInstance.getDishes().then(dishResults => {
          this.status = 'LOADED'
          this.dishResults = dishResults.results
          console.log(dishResults.results);

        }).catch(() => {
          this.status = 'ERROR'
        })
      },

      getType: function(){
        var string = modelInstance.getType()
        return string.charAt(0).toUpperCase() + string.slice(1)
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

#title{
  padding-bottom: 5px;
}



</style>
