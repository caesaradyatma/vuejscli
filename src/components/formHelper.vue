<template>
  <div id="formhelper">
    <!-- <slot name="form-title"></slot>
    <slot name="form-content"></slot> -->
    <input type="text" name="title" v-model="title">
    <input type="text" name="body" v-model="body">
    <button v-on:click.prevent = "postData">Submit</button>
  </div>
</template>

<script>
  export default {
    name:'formhelper',
    data() {
      return {
        message:"isi form helper",
        title:"",
        body:"",
      }
    },
    methods: {
      postData: function() {
        this.$http.post('https://jsonplaceholder.typicode.com/posts', {
          title: this.title,
          body: this.body,
          userId: 1
        }).then(function(data){
          console.log(data)
          alert('Data Submitted');
        });
      }
    }
  }
</script>
