<template>
  <div class="sidebar col-sm-3">
    <div class="" id="leftContainer" style="width: 100%;">

 			<nav class="navbar flex-md-column navbar-expand-lg bg-faded navbar-light" id="navView" >
				<div class="navbar-brand my-auto">
					<h3>My Dinner</h3>
				</div>

				<span class="d-md-none" id="totalPriceNav"><h4></h4></span>

				<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent2">
	   				<span class="navbar-toggler-icon"></span>
	 			</button>

	 			<div class="collapse navbar-collapse flex-md-column" id="navbarSupportedContent2" style="width: 100%;" >

				  	<div class="container-fluid">
				  		<div class="row">
				  			<div class="col-12">
								Number of guests: <span id="numberOfGuests"></span>
							</div>
						</div>
					</div>

					<div>
			       		<button id="minusBtn" class="btn">-</button>
						<button id="plusBtn" class="btn">+</button>
					</div>

					<div class="container-fluid" style="margin-top: 20px;">
						<div class="row" id="infoTexts" >
							<div class="col-10" id="">Dish name</div>
							<div class="col-2" id="cost">Cost</div>
						</div>
					</div>

					<div class="container-fluid">
						<div class="row" id="leftMenu">

						</div>
					</div>


					<div style="text-align: right; padding-right: 10px;" id="totalPrice">

					</div>


					<a class='btn btn-primary' role='button' id="confirmDinnerBtn" style="margin-top: 20px;">Confirm dinner</a>
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
  export default {
    /*props: ['model'],
    // this methods is called by React lifecycle when the
    // component is created that's a good place to setup model observer
    created() {
      this.model.addObserver(this)
    },

    // this is called when component is removed destroyed
    // good place to remove observer
    beforeDestroy() {
      this.model.removeObserver(this)
    },

    // we define and initalise the data we want to use and modify in the component
    data() {
      return {
        numberOfGuests: this.model.getNumberOfGuests()
      }
    },

    methods: {
      // in our update function we modify the the property of
      // the compoented which will cause the component to re-render
      update() {
        this.numberOfGuests = this.model.getNumberOfGuests()
      },

      // our handler for the input's on change event
      onDidChangeNumberOfGuests(e) {
        this.model.setNumberOfGuests(+e.target.value)
      }
    }*/
  }
</script>

<style scoped>
  #leftContainer {
    border-right: 2px solid black;
    padding-right: 0px;
  }
</style>
