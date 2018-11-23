<template>
  <div id="titledata">
    <h1>Title Data</h1>
    <input type="text" v-model="search" name="search" placeholder="Search Data">
    <div v-for="data in filteredData" class="single-data">
      <p>Title: {{data.title | to-uppercase}}</p>
    </div>
  </div>
</template>

<script>
  import searchMixin from '../mixins/searchMixin'

  export default {
    name:'titledata',
    data() {
      return {
        datas: [],
        search: ''
      }
    },
    methods: {

    },
    created() {
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
        this.datas = data.body.slice(0,10)
      })
    },
    computed: {

    },
    mixins: [searchMixin]
  }
</script>

<style>
  .single-data {
    background-color:grey;
    margin: 20px;
    padding:10px;
    color:white;
  }
</style>
