<template>
    <nav class="navbar navbar-expand-lg navbar-dark primary-color bg-info">
        <b-navbar-brand to="home"><img src="../assets/logo.svg" width="24" alt="logo"></b-navbar-brand>

        <div>
            <button v-if="$route.path!='/home' && $route.path!='/'" class="navbar-toggler" type="button" v-on:click="toMenu">Menu</button>
            <button class="navbar-toggler" type="button"v-on:click="deconnexion">Déconnexion</button>
        </div>

        <div class="collapse navbar-collapse" id="basicExampleNav">
            <b-navbar-nav>
                <b-nav-item v-if="$route.path!='/home' && $route.path!='/'" to="home">Menu</b-nav-item>
                <b-nav-item v-on:click="deconnexion">Déconnexion</b-nav-item>
            </b-navbar-nav>
        </div>
    </nav>
</template>
<script>
    export default {
        name: "Navbar",
        methods:{
            deconnexion(){
              this.$store.commit("deleteUser")
              this.$router.push('/signin');
            },
            toMenu(){
                this.$router.push('/home');
            }
        },
        computed:{
            main(){
                return this.$route.path =! '/home'
            }
        }
    }
</script>
<style scoped lang="scss">
.navbar{
    position: absolute;
    width: 100%;

}
    .nav-link {
        color: white !important;
        font-weight: bold;
    }
    .navbar-collapse{
        ul{
            li{
                text-align: center;
            }
        }
    }
</style>