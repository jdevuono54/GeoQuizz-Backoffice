<template>
    <div class="container-fluid home">
        <div class="row">
            <div class="col-lg-4 offset-lg-4 col-md-8 offset-md-2 container-game text-center">
                <div class="title">
                    <img alt="logo" src="../assets/logo_without_text.svg" width="64">
                    <h1>GeoQuizz</h1>
                </div>
                <br>
                <h3>Vos photos</h3>
                <br>
                <ul v-for="photo in $store.state.listeDesPhotos" class="list-group">
                    <li class="list-group-item" >
                        <div> description : {{photo.description}}</div>
                        <img v-bind:src="photo.link" height="50%" width="30%">
                        <b-btn v-bind:id="photo.id" v-on:click="clique">Ajouter</b-btn>
                    </li>
                </ul>
                <b-btn class="btn" to="/PostConnexion">Retour</b-btn>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ListPicturePage',
        mounted() {

        },
        data: function () {

            return {

            }
        },
        methods:{
            clique(){
                alert(this.serie)
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
            .title{
                margin-top: 11em;
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

