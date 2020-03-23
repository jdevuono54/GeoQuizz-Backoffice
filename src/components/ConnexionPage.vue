<template>
    <div class="container-fluid home">
        <div class="row">
            <div class="col-lg-4 offset-lg-4 col-md-8 offset-md-2 container-game text-center">
                <div class="title">
                    <img alt="logo" src="../assets/logo_without_text.svg" width="64">
                    <h2>GeoQuizz</h2>
                </div>
                <div >
                    <form @submit.prevent="connexionMembre">
                        <input type="text" placeholder="Entrer votre adresse mail" v-model="email" required class="form-control"  >
                        <br>
                        <input type="password" placeholder="Entrer le mot de passe" v-model="password" required class="form-control">
                        <br>
                        <input type="submit"  value='LOGIN'  class="btn btn-primary">
                        <b-btn class="btn"  to='/Inscription' >Créer un compte</b-btn>
                </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ConnexionPage',
        mounted() {

        },
        data: function () {

            return {
                    email:'',
                    password:''
            }
        },
        methods:{
            connexionMembre(){
                this.$axios.post("user/signin",  {
                    withCredentials: true
                },{
                    auth: {
                        username: this.email,
                        password: this.password
                    }}).then((response) =>{
                    this.$router.push('/PostConnexion');
                    this.$store.commit('setSession',response.data);
                }).catch(error => {
                    alert(error.response.data.message);

                })
            }
        }

    }
</script>

<style lang="scss" scoped>
    .home {
        min-height: 100vh;


        .container-game {
            margin-top: 50vh;
            transform: translateY(-50%);

            h1 {
                display: inline;
                font-size: 4em;
            }

            img {
                margin-right: 1%;
                vertical-align: top;
            }
            .btn {
                margin-top: 1em;
                margin-left: 2em;
                background-color: lightgrey;
                color: dodgerblue;
                width: 10em;

            }

        }
    }
</style>

