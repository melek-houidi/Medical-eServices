<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <p>
      Here we are in our App Component.
    </p>
    <h3>Ahmed</h3>
    <h3>Zied</h3>
    <h3>Melek</h3>
    <h3>Khaled</h3>
    
  </div>
</template>

<script>
export default {
  name: 'main',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
