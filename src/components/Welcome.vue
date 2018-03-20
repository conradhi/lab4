<template>
  <div class="welcome jumbotron">
    <div class="row justify-content-center text-center">
      <div class="col-12 col-md-4">

        <h6> {{ msg }} </h6>

        <div class="col-12">
             <router-link class='btn btn-primary' to="/dishes" exact>Create new dinner</router-link>
  			</div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.' +
            ' Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus' +
            'mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.'
      }
    }
  }
</script>

<!-- Example of styling Vue components -->
<!-- With the scoped attribute, CSS will apply to elements of the current component only -->
<style scoped>

</style>
