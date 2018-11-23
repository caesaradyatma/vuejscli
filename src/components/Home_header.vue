<template>
  <nav>
    <li><router-link to="/show">Show List</router-link></li>
    <li><router-link to="/title">Title List</router-link></li>
  </nav>
</template>

<script>
  export default {
    name:'home-header',
    data () {
      return {
        headermsg: 'this is the header'
      }
    }
  }
</script>

<style scoped>

  header {
    background-color:blue;
  }

</style>
