<template>
  <footer>
    <h1>{{ footmsg }}</h1>
  </footer>
</template>

<script>
  export default {
    name: 'home-footer',
    data () {
      return {
        footmsg: 'this is the footer'
      }
    },
    beforeCreate() {
      alert('before create');
    },
    created() {
      alert('created');
    },
    beforeMount() {
      alert('before mount');
    },
    mounted() {
      alert('mounted');
    },
    beforeUpdate() {
      alert('before update');
    },
    updated() {
      alert('updated');
    }
  }
</script>

<style scoped>
  p {
    color: green;
  }

  footer {
    background-color:red;
  }
</style>


