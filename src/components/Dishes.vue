

<template>
  <div class="Dishes col-sm-9">
    <div class="" id="allDishesView">
			<div class="container-fluid" style="margin-top: 20px;">

			<h3 style="padding-left: 10px;  margin-bottom: 0px;">Find a dish</h3>


				<div class="row justify-content-center" id="searchArea">
					<div class="col-sm-4" style="margin-top: 10px;">
						<form>
						    <div>
						    	<input id="searchText" type="text" class="form-control" placeholder="Enter keywords" onkeypress="return event.keyCode != 13">
						    </div>
						</form>
					</div>

					<div class="btn-group mr-2">
					    <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					      	All
					    </button>

					    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
					    	<a class="dropdown-item" id="allButton">All</a>
					      	<a class="dropdown-item" id="startersButton">Starters</a>
					      	<a class="dropdown-item" id="mainDishButton">Main dish</a>
					      	<a class="dropdown-item" id="dessertButton">Dessert</a>
					    </div>
					</div>

				</div>

				<div class="container-fluid">
					<div class="row" id="all">
            <ul>
              <em v-if='status === "INITIAL"'>Loading...</em>
              <b v-else-if='status === "ERROR"'>Failed to load data, please try again</b>
              <li v-for="dish in dishes" :id="dish.id" :key="dish.id">
                {{ dish.title }}
                <img :src="https://webknox.com/recipeImages/" + "dishes.imageUrls" class='img-fluid' alt='Responsive image'></img>
              </li>
            </ul>


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
      modelInstance.getAllDishes().then(dishes => {
        this.status = 'LOADED'
        this.dishes = dishes.results
        console.log(dishes);


      }).catch(() => {
        this.status = 'ERROR'
      })
    },
    data() {
      return {
        status: 'INITIAL',
        dishes: [],
      }
    },

  }

</script>
