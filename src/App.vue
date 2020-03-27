<template>
  <div id="app">
    <NavBar  v-if="$route.path!='/signin'&& $route.path!='/signup'"></NavBar>
    <router-view/>
  </div>
</template>
<script>
  import NavBar from "./components/NavBar";
  export default {
    name: "App",
    mounted() {
      this.checkTokenUser();
      setTimeout(() =>{
        this.checkTokenUser();

      }, 5000);
    },
    methods:{
      checkTokenUser(){
        if(this.$store.state.user !== null){
          this.$axios.post("user/check-token", {}, {
            headers: {Authorization: 'Bearer ' + this.$store.state.user.token}
          }).then((response) => {
            console.log("Token valide")
          }).catch(error => {
            this.$store.commit("deleteUser")
            this.$router.push('/signin');
            console.log("Token invalide")
            this.$root.makeToast("Token invalide")
          })
        }
      }
    },
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
