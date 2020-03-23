<template>
    <div class="container-fluid home">
        <div class="row">
            <div class="col-lg-4 offset-lg-4 col-md-8 offset-md-2 container-game text-center">
                <div class="title">
                    <img alt="logo" src="../assets/logo_without_text.svg" width="64">
                    <h1>GeoQuizz</h1>
                </div>
                <br>
                <h3>Séléctionnez une série</h3>
                <br>
                <ul v-for="serie in $store.state.lesSeries" class="list-group">
                    <li class="list-group-item" >
                       <router-link :to="{
                    name : 'SeriePage',
                    params : {
                        identifiant : serie.id
                    }}"> Ville : {{serie.city}}
                       </router-link>
                    <div >Nombre de photos : {{serie.nb_pictures}}</div>
                    <div>Distance : {{serie.distance}}</div>
                    </li>
                </ul>
                <b-btn class="btn" to="/PostConnexion">Retour</b-btn>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ListSeriePage',
        mounted() {

        },
        data: function () {

            return {

            }
        },
        methods:{

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
                margin-top: 5em;
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
                width: 10em;

            }
            .listSerie{
                text-align: left;
            }

        }
    }
</style>

