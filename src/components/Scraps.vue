<template>
  <div class="box">
    I'm a box Counter: {{ counter }} hey

    <!-- Not just inner text -->
    <!-- dynamic, will constantly chech for updates -->
    <span v-bind:title="message">
      Hover your mouse over me for a few seconds to see my dynamically bound
      title!
    </span>

    <!-- click events -->
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>

    <!-- oh, 2-way, this will be able to change all above-->
    <p>{{ message }}</p>
    <input v-model="message" />

    <!-- v-if -->
    <!-- v-for -->

    <!-- components -->


  </div>
  
</template>

<script>
  export default {
    data() {
      return {
        counter: 0,
        message: 'You loaded this page on ' + new Date().toLocaleString()
      };
    },
    mounted() {
      setInterval(() => {
        this.counter++
      }, 1000)
    },
    methods: {
      reverseMessage() {
        this.message = "daaaa"
      }
    }
  };
</script>


<style lang="css" scoped>
.box {
  /* height: 100px; */
  /* width: 100px; */
  background-color: red;
}
</style>
