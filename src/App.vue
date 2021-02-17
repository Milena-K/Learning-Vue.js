<template>
  <div id="app">
    <div id="banner">
      <img src="./assets/banner-slim.jpg" alt="" />
    </div>
    <app-header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    'app-header': Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #5428AB;
  width: 100%;
  height: 100%;
}
body {
  background: #004369;
  margin: 0;
}
</style>
