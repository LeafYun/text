<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    
    <router-link to="/one">one</router-link>
    <router-link to="/two">two</router-link>
    <router-link to="/three">three</router-link>
    <a href="/one">one</a>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
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
.router-link-active{
  color: red
}
.leaf{
  color: lightblue
}
</style>
