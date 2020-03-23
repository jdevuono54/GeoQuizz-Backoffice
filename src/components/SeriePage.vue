<template>

    <div class="container-fluid home">
        <div class="row">
            <div class="col-lg-4 offset-lg-4 col-md-8 offset-md-2 container-game text-center">
                <div class="title">
                    <img alt="logo" src="../assets/logo_without_text.svg" width="64">
                    <h1>GeoQuizz</h1>
                </div>
                <div class="list-group-item">
                    <div>Ville : {{serie.city}}</div>
                    <div>Distance : {{serie.distance}}</div>
                    <div>Nombre de photo: {{serie.nb_pictures}}</div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    export default {
        name : 'SeriePage',

        data:function () {
            return {
                serie : false
            }
        },
        mounted()  {
            this.serie = this.getSerie(this.$route.params.identifiant);
            /*alert(this.$route.params.identifiant)*/
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