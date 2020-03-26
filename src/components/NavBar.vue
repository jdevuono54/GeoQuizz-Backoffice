<template>
    <nav class="navbar navbar-expand-lg navbar-dark primary-color bg-info">
        <b-navbar-brand to="home"><img src="../assets/logo.svg" width="24" alt="logo"></b-navbar-brand>

        <div>
            <button class="navbar-toggler" type="button" v-on:click="toMenu">Menu</button>
            <button class="navbar-toggler" type="button"v-on:click="deconnexion">Déconnexion</button>
        </div>

        <div class="collapse navbar-collapse" id="basicExampleNav">
            <b-navbar-nav>
                <b-nav-item  to="home">Menu</b-nav-item>
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
        }
    }
</script>
<style scoped lang="scss">
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