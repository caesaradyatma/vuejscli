<template>
  <header>
    <h1>{{ headermsg }}</h1>
    <nav>
      <ul>
        <li>test</li>
      </ul>
    </nav>
  </header>
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
