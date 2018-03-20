<template>
  <div>
    <h2>This is the Select Dish screen</h2>
    <!-- We pass the model as property to the Sidebar component -->
    <!--<sidebar :model="this.model"/>-->
    <!--<dishes />-->
    <h1>{{ dishes.data.title }}</h1>
    <img :src="dishes.data.image" class='img-fluid' alt='Responsive image'></img>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        id: this.$route.params.id,
        dishes: {}
      }
    },

    created(){
      this.$http.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + this.id + '/information',
      {
        headers: {
          'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB',
        }
      }).then(function(data){
        this.dishes = data;
        console.log(data);
      })
    }
  }

</script>
