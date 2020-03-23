<template>
    <b-navbar toggleable="sm" fixed="top" type="light" variant="info">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand to="Home"><img src="../assets/logo.svg" width="24" alt="logo"></b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item to="Home">Accueil</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav>
                <b-nav-item v-on:click="deconnexion">Déconnexion</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name: "Navbar",

        methods:{
            deconnexion(){

                this.$router.push('/Home');
                this.$store.state.tokenSession = ''
                this.$store.state.membre = false
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