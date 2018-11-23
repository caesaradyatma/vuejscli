<template>
  <div id="app">
    <home-header></home-header>
    <h2>{{msg}}</h2>
    <formhelper></formhelper>
    <showdata></showdata>
    <home-content></home-content>
    <home-footer></home-footer>
  </div>
</template>

<script>
//import test component locally
import Home_header from './components/Home_header.vue'
import Home_footer from './components/Home_footer.vue'
import Home_content from './components/Home_content.vue'
import formHelper from './components/formHelper.vue'
import showData from './components/showData.vue'

export default {
  components:{
    'home-header'   : Home_header,
    'home-footer'   : Home_footer,
    'home-content'  : Home_content,
    'formhelper'    : formHelper,
    'showdata'      : showData
  },
  name: 'app',
  data () {
    return {
      msg: 'this is the main app'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

h3 {
  color: red;
}
</style>
