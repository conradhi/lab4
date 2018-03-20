<template>
  <div>
    <header>
  	   <h1>Dinner Planner</h1>
	  </header>
    <div class="row">
      <router-view name="navbar"></router-view>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import Welcome from './components/Welcome.vue';
import Sidebar from './components/Sidebar.vue';
import Dishes from './components/Dishes.vue';
import SelectDish from './components/SelectDish.vue';



export default {
//  name: 'App'
  components: {
       'welcome': Welcome,
       'selectDish': SelectDish,
       'sidebar': Sidebar,
       'dishes': Dishes,
     }
 }
</script>

<style scoped>
  header {
    background: #888;
    margin: 0;
    padding: 5px;
    text-align: center;
  }
</style>
