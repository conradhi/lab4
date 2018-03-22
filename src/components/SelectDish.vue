<template>

  <div class="col-sm-9">
    <div class="row">
      <div class="col-6">

        <div class='text-center'>
      		<h3>{{dish.title}}</h3>
          <img :src="dish.image" class='img-fluid' alt='Responsive image'></img>
      	</div>

          {{dish.instructions}}

        <div class='text-center'>
      		<a class='btn btn-primary' id='backToSearchBtn' role='button'>Back to search</a>
      	</div>

      </div>

      <div class="col-6">
        <div class='container-fluid'>
          <div class='row'>
            <div class='col-12' style='margin-bottom: 20px;'>
              INGREDIENTS FOR 2 PEOPLE
            </div>
          </div>





          <div v-for="(ingredient, index) in ingredients" :id="ingredient.id" :key="ingredient.id" class="col-12">
        		<div class='row'>

          		<div class='col-2'>
                {{ingredients[index].amount}}
                {{ingredients[index].unit}}
          		</div>

          		<div class='col-3'>
                {{ingredients[index].name}}
          		</div>

          		<div class='col-7 d-none d-md-block'>
                <img :src="ingredients[index].image" class='img-fluid' alt='Responsive image'></img>
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

    mounted(){
      modelInstance.getAllInfo().then(dish => {
        this.status = 'LOADED'
        console.log(dish);
        this.dish = dish
        this.ingredients = dish.extendedIngredients
        console.log(this.ingredients);


      }).catch(() => {
        this.status = 'ERROR'
      })
    },
    data() {
      return {
        status: 'INITIAL',
        dish: [],
        ingredients: []
      }
    }
  }

</script>
