<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view/>
  </div>
</template>
<script>
  import NavBar from "./components/NavBar";
  export default {
    name: "App",
    components:{
      NavBar
    }

  }
</script>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
  @import 'node_modules/bootstrap/scss/bootstrap';
  @import 'node_modules/bootstrap-vue/src/index.scss';

  body {
    margin: 0;

    #app {
      font-family: 'Raleway', sans-serif;
    }
  }
</style>
