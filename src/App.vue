<template >
  <div>
    <header>
  	   <h1>Dinner Planner</h1>
	  </header>
    <div class="row">
      <router-view name="navbar" id="fixed"></router-view>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import Welcome from './components/Welcome.vue';
import Sidebar from './components/Sidebar.vue';
import Dishes from './components/Dishes.vue';
import Recipe from './components/Recipe.vue';
import Confirm from './components/Confirm.vue';
import Print from './components/Print.vue';



export default {
//  name: 'App'
  components: {
       'welcome': Welcome,
       'recipe': Recipe,
       'sidebar': Sidebar,
       'dishes': Dishes,
       'confirm': Confirm,
       'print': Print
     }
 }
</script>

<style scoped>

  #fixed{
    position: fixed;
  }

  header {
    background: black;
    color: white;
    margin: 0;
    padding: 5px;
    text-align: center;
  }

  @media only screen and (max-width: 768px) {
    #fixed {
        position: relative;
    }
  }

</style>
