<template>
  <div id="home-content">
    <h3>{{ contentmsg }}</h3>
    <div v-bind="contentArray" v-for = "value in contentArray">
      <p v-bind:class = "{ bgcolor:bgcolor }">{{ value.name }}</p>
      <a href="#" v-on:click="changeColor()">Change Color</a>
    </div>
    <input type="text" v-model="contentmsg">
  </div>
</template>

<script>
  export default {
    name: 'home-content',
    data () {
      return {
        contentmsg: 'im inside the app component',
        bgcolor: false,
        contentArray: [
          {name: 'budi', age: '22'},
          {name: 'alek', age: '24'},
          {name: 'test', age: '25'},
        ]
      }
    },
    methods: {
      changeColor: function () {
        if(this.bgcolor === false){
          this.bgcolor = true;
        }
        else{
          this.bgcolor = false;
        }
      }
    }
  }
</script>

<style scoped>
  h3 {
    color: yellow;
  }

  .bgcolor{
    background-color: red;
  }
</style>

