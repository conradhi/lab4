<template>
  <div class="sidebar col-12 col-md-3">
    <div class="" id="leftContainer" style="width: 100%;">

 			<nav class="navbar flex-md-column navbar-expand-lg bg-faded navbar-light" id="navView" >
				<div class="navbar-brand my-auto">
					<h3 id="text">My Dinner</h3>
				</div>

				<span class="d-md-none" id="totalPriceNav">  <h4 style="color:white; text-align:right;">Total: {{ total }}</h4></span>

				<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent2">
	   				<span class="navbar-toggler-icon"></span>
	 			</button>

	 			<div class="collapse navbar-collapse flex-md-column" id="navbarSupportedContent2" style="width: 100%;" >

				  	<div class="container-fluid">
				  		<div class="row">
				  			<div class="col-12 col-md-8 text-center text-md-left">
                   <h6 id="text">Total number of guests: {{ numberOfGuests }}</h6>
							  </div>

                <div class="btn-group text-center text-md-left" role="group" aria-label="Basic example">
                  <button class="btn btn-secondary btn-lg" v-on:click="changeNumberOfGuests('sub')">-</button>
                  <button class="btn btn-secondary btn-lg" v-on:click="changeNumberOfGuests('add')">+</button>
                </div>
					    </div>
					  </div>



					<div class="container-fluid" style="margin-top: 20px;">
						<div class="row" id="menuTitel" >
							<div class="col-10" id="text"><h6>Dish name</h6></div>
							<div class="col-2" id="text" style="text-align: right;"><h6>Cost</h6></div>
						</div>
					</div>

					<div class="container-fluid">
            <div v-for="(dish, index) in menu" :id="dish.id" :key="dish.id" >


                  <div class="row" id="menuItem">
                    <div class="col-1 py-2" id="remove" v-on:click="removeFromMenu(dish)">
                      x
                    </div>
                    <router-link v-bind:to="'/recipe/' + menu[index].id" class="col-11 py-2">
                      <div class="row">
                      <div class="col-9" id="text" v-on:click="setDishId(menu[index].id)">
                        {{ dish.title }}
                      </div>
                      <div class="col-3" style="text-align:right;" id="text" v-on:click="setDishId(menu[index].id)">
                        {{ dish.pricePerServing*numberOfGuests}}
                      </div></div>
                    </router-link>
                  </div>


						</div>
            <div class="row">
              <div class="col-12" id="total">
                <h6>Total: {{ total }}</h6>
              </div>
            </div>

					</div>
          <router-link class='btn btn-primary mb-3' to="/confirm" exact>Confirm dinner</router-link>
				</div>

			</nav>

		</div>
    <!--<h3>This is the sidebar</h3>
    <p>
      People: <input :value="numberOfGuests" @input="onDidChangeNumberOfGuests" @change="onDidChangeNumberOfGuests"/>
      <br/>
      Total number of guests: {{ numberOfGuests }}
    </p>-->
  </div>
</template>

<script>
import {modelInstance} from "./DinnerModel";
  export default {
    //props: ['model'],
    // this methods is called by React lifecycle when the
    // component is created that's a good place to setup model observer
    created() {
      modelInstance.addObserver(this)
    },

    // this is called when component is removed destroyed
    // good place to remove observer
    beforeDestroy() {
      modelInstance.removeObserver(this)
    },

    mounted(){
        this.menu = modelInstance.loadMenu();
    },

    // we define and initalise the data we want to use and modify in the component
    data() {
      return {
        numberOfGuests: modelInstance.getNumberOfGuests(),
        menu: [],
        total: modelInstance.getTotalPriceLoad()
      }
    },

    methods: {
      // in our update function we modify the the property of
      // the compoented which will cause the component to re-render
      update() {
        this.numberOfGuests = modelInstance.getNumberOfGuests(),
        this.menu = modelInstance.getMenu(),
        this.total = modelInstance.getTotalPrice()
      },

      // our handler for the input's on change event
      changeNumberOfGuests(e) {
        modelInstance.setNumberOfGuests(e)
      },

      removeFromMenu(dishToRemove){
        modelInstance.editMenu("remove", dishToRemove)
      },

      setDishId: function(num){
        modelInstance.setCurrentDishId(num)
      }
    }
  }
</script>

<style scoped>

  #leftContainer{
    background: rgba(0, 0, 0, 0.8);
  }

  #leftContainer:hover{
    background: rgba(0, 0, 0, 0.9);
    box-shadow: 10px 10px 10px white;
  }

  #menuItem{
    color: white;
  }

  #menuItem:hover{
    background-color: #999;
  }

  #menuTitel{
    color: white;
    border-bottom: 2px solid;
  }

  #remove:hover{
    background-color: red;
  }

  a:hover,  a:visited,  a:link,  a:active {
    text-decoration: none;
  }

  #text{
    color: white;
  }

  #title{
    color: black;
  }

  #total{
    color: white;
    border-top: 2px solid;
    padding-top: 10px;
    text-align: right;

  }
</style>
