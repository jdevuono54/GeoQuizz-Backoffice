<template>
    <div class="container-fluid home">
        <div class="row">
            <div class="col-lg-4 offset-lg-4 col-md-8 offset-md-2 container-game text-center">
                <div class="title">
                    <img alt="logo" src="../assets/logo_without_text.svg" width="64">
                    <h1>GeoQuizz</h1>
                </div>
                <br>
                <div>
                    <h2> Série séléctionée : </h2>
                </div>
                <br>
                <div class="list-group-item">
                    <div>Ville : {{serie.city}}</div>
                    <div>Distance : {{serie.distance}}</div>
                    <div>Nombre de photo: {{serie.nb_pictures}}</div>
                    <b-btn class="btn" v-on:click="masquer_div('FormModif')">Modifier la série</b-btn>
                </div>
                <b-btn class="btn" v-on:click="listPhoto" :to="{
                    name : 'ListPicturePage',
                    params : {
                        identifiant : serie.id
                    }}">Mes photos</b-btn>
                <b-btn v-on:click="masquer_div('FormTelecharger')">Importer</b-btn>
                <b-btn to="/ListSerie">Retour</b-btn>

                <br>
                <div id="FormModif">
                    <br>
                    <form @submit.prevent="modifSerie">
                        <h5>Modifiez la série: </h5>
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
                        <br>
                        <div>
                            <input type="number" placeholder="Nombre de photo" v-model.number="nb_pictures" required class="form-control"/>
                        </div>
                        <br>
                        <div>
                            <input class="btn" type="submit"  value="Modifier">
                        </div>
                    </form>
                </div>
                <br>
                <TelechargerPhoto  id="FormTelecharger" ></TelechargerPhoto>
            </div>
        </div>
    </div>


</template>

<script>
    import TelechargerPhoto from "./TelechargerPhoto";
    import ListPicturePage from "./ListPicturePage";
    export default {
        name : 'SeriePage',
        components:{
            TelechargerPhoto,
            ListPicturePage
        },

        data:function () {
            return {
                serie : false,
                ToutePhoto: [],

                city:'',
                distance:'',
                latitude:'',
                longitude:'',
                zoom:'',
                nb_pictures:'',

            }
        },
        mounted()  {
            this.serie = this.getSerie(this.$route.params.identifiant);
            /*alert(this.$route.params.identifiant)*/
        },
        methods:{

             masquer_div(id)
                {
                    if (document.getElementById(id).style.display == 'none') {
                        document.getElementById(id).style.display = 'block';
                    }
                    else {
                        document.getElementById(id).style.display = 'none';
                    }
                },
            modifSerie(){

                let parametre = {

                    city:this.city,
                    distance:this.distance,
                    latitude:this.latitude,
                    longitude:this.longitude,
                    zoom:this.zoom,
                    nb_pictures:this.nb_pictures,
                    id: this.serie.id

                };
                this.$axios.put("series/"+this.serie.id,parametre,{
                        headers: { Authorization: "Bearer " + this.$store.state.tokenSession }
                    }
                ).then((response) =>{

                    this.$router.push('/PostConnexion');
                    alert('Série modifié')

                })
            },
            listPhoto(){

                this.$axios.get("pictures/",{
                        headers: { Authorization: "Bearer " + this.$store.state.tokenSession }
                    }
                ).then((response) =>{
                    this.$store.commit('setPicture',response.data);
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
            .title{
                margin-top: 10em;
            }

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
                width: 12em;

            }
            .listSerie{
                text-align: left;
            }
            #FormModif, #FormTelecharger{
                display: none;
            }

        }
    }
</style>