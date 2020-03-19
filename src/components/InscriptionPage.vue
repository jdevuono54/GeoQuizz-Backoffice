<template>

    <div class="container-fluid home">
        <div class="row">
            <div class="col-lg-4 offset-lg-4 col-md-8 offset-md-2 container-game text-center">
                <div class="title">
                    <img alt="logo" src="../assets/logo_without_text.svg" width="64">
                    <h2>GeoQuizz</h2>
                </div>
                <div >
                    <form @submit.prevent="setMembre">
                        <div>
                            <input type="text" placeholder="Entrer le nom d'utilisateur" v-model="fullname" required class="form-control"/>
                        </div>
                        <br>
                        <div>
                            <input type="text" placeholder="email" v-model="email" required class="form-control"/>
                        </div>
                        <br>
                        <div>
                            <input type="password" placeholder="Entrer le mot de passe" v-model="password" required class="form-control"/>
                        </div>
                        <br>
                        <div>
                            <input class="btn" type="submit"  value="valider l'inscription">

                            <button class="btn" >
                                <router-link class="button_is_text"  to='/Home' >Retour</router-link>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InscriptionPage",

        data:function () {
            return {
                fullname:'',
                email:'',
                password:'',

            }

        },

        /*methods:{
            setMembre()
            {
                let parametre = {
                    fullname:this.fullname,
                    password:this.password,
                    email:this.email

                };
                axios.post("members",parametre).then((response) =>{

                    this.$router.push('/Connexion');
                })
            }
        }*/
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