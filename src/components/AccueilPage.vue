<template>
    <div>
        <div class="container-fluid home">
            <div class="row">
                <div class="col-lg-4 offset-lg-4 col-md-8 offset-md-2 container-game text-center">
                    <div class="title">
                        <img alt="logo" src="../assets/logo_without_text.svg" width="64">
                        <h1>GeoQuizz</h1>
                    </div>
                    <div class="choix">
                        <b-btn class="btn" to="/ListSerie" v-on:click="listeSeries">Compléter une série</b-btn>
                        <br>
                        <b-btn class="btn" to="/NouvelleSerie">créer une nouvelle série</b-btn>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SearchBarSerie from "./SearchBarSerie";
    export default {
        name: 'AccueilPage',
        components: {SearchBarSerie},
        comments: {
            SearchBarSerie
        },
        methods:{
            listeSeries()
            {
                this.$axios.get("series").then((response) =>{

                    this.$store.commit('setSeries',response.data);
                    /*console.log(this.$store.state.lesSeries)*/

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
                margin-top: 3em;
                background-color: lightgrey;
                color: dodgerblue;
                width: 30em;
                height: 3em;
            }
            .choix{
                margin-top: 2em;
            }
        }
    }
</style>
