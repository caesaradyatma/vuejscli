<template>
  <div id="showdata">
    <h1>Show Data</h1>
    <input type="text" v-model="search" name="search" placeholder="Search Data">
    <div v-for="data in filteredData" class="single-data">
      <p>Title: {{data.title | to-uppercase}}</p>
      <p>Body: {{data.body}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name:'showdata',
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
      filteredData: function() {
        return this.datas.filter((data) => {
          return data.title.match(this.search)
        })
      }
    }
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
