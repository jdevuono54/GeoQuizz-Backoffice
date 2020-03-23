<template>

    <div class="container-fluid home">
        <div class="row">
            <div class="col-lg-4 offset-lg-4 col-md-8 offset-md-2 container-game text-center">
                <div class="title">
                    <img alt="logo" src="../assets/logo_without_text.svg" width="64">
                    <h2>GeoQuizz</h2>
                </div>
                <div >
                    <form @submit.prevent="setSerie">
                        <div>
                            <input type="text" placeholder="ville" v-model="city" required class="form-control"/>
                        </div>
                        <br>
                        <div>
                            <input type="number" placeholder="Distance" v-model.number="distance" required class="form-control"/>
                        </div>
                        <br>
                        <div>
                            <input type="text" placeholder="Latitude" v-model="latitude" required class="form-control"/>
                        </div>
                        <br>
                        <div>
                            <input type="text" placeholder="Longitude" v-model="longitude" required class="form-control"/>
                        </div>
                        <br>
                        <div>
                            <input type="number" placeholder="Zoom" v-model.number="zoom" required class="form-control"/>
                        </div>
                        <!--<br>
                        <div>
                            <input type="number" placeholder="Nombre de photo" v-model.number="nb_pictures" required class="form-control"/>
                        </div>-->
                        <br>
                        <div>
                            <input class="btn" type="submit"  value="Ajouter la série">

                            <button class="btn" >
                                <router-link class="button_is_text"  to='/PostConnexion' >Retour</router-link>
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
                city:'',
                distance:'',
                latitude:'',
                longitude:'',
                zoom:'',
                nb_pictures:'',
            }
        },

        methods:{
            setSerie()
            {
                let parametre = {

                    city:this.city,
                    distance:this.distance,
                    latitude:this.latitude,
                    longitude:this.longitude,
                    zoom:this.zoom,
                    nb_pictures:0

                };
                this.$axios.post("series",parametre,{
                    headers: { Authorization: "Bearer " + this.$store.state.tokenSession }
                }
            ).then((response) =>{

                    /*this.$router.push('/Connexion');*/
                    alert("ok")
                })
            }
        },

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