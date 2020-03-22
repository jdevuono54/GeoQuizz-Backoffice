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
                            <input type="text" placeholder="Prénom" v-model="firstname" required class="form-control"/>
                        </div>
                        <br>
                        <div>
                            <input type="text" placeholder="Nom" v-model="lastname" required class="form-control"/>
                        </div>
                        <br>
                        <div>
                            <input type="text" placeholder="Email" v-model="email" required class="form-control"/>
                        </div>
                        <br>
                        <div>
                            <input type="password" placeholder="Mot de passe" v-model="password" required class="form-control"/>
                        </div>
                        <br>
                        <div>
                            <input type="text" placeholder="Numéro de téléphone" v-model="phone" required class="form-control"/>
                        </div>
                        <br>
                        <div>
                            <input type="text" placeholder="Rue" v-model="street" required class="form-control"/>
                        </div>
                        <br>
                        <div>
                            <input type="number" placeholder="Numéro de rue" v-model.number="street_number" required class="form-control"/>
                        </div>
                        <br>
                        <div>
                            <input type="text" placeholder="Ville" v-model="city" required class="form-control"/>
                        </div>
                        <br>
                        <div>
                            <input type="number" placeholder="Code Postal" v-model.number="zip_code" required class="form-control"/>
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
                firstname:'',
                lastname:'',
                email:'',
                password:'',
                phone:'',
                street_number:'',
                street:'',
                city:'',
                zip_code:''

            }

        },

        methods:{
            setMembre()
            {
                let parametre = {
                    firstname:this.firstname,
                    lastname: this.lastname,
                    email:this.email,
                    password:this.password,
                    phone:this.phone,
                    street_number: this.street_number,
                    street: this.street,
                    city: this.city,
                    zip_code: this.zip_code

                };
                this.$axios.post("user/signup",parametre).then((response) =>{

                    this.$router.push('/Connexion');
                    /*console.log("ok")*/
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