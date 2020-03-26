<template>
    <div>
        <search-bar-serie/>

        <div v-if="selectedSerie" class="infoSeries">
            <p>Identifiant de la série : {{ selectedSerie.id }}</p><p> Ville : {{ selectedSerie.city }}</p><p> Nombre de photos : {{ selectedSerie.nb_pictures }}</p><p> Date de dernière mise à jour : {{ selectedSerie.updated_at }}</p>

            <div>
                <button type="button" class="btn btn-info">Modifier les informations de la série</button>
                <button type="button" class="btn btn-primary">Ajouter des photos à la série</button>
            </div>
        </div>

    </div>
</template>

<script>
    import SearchBarSerie from "../../SearchBarSerie";
    export default {
        name: "UpdateSeriesMenu",
        components: {SearchBarSerie},
        data(){
            return{
                selectedSerie:null
            }
        },
        beforeDestroy() {
            this.$bus.$off();
        },
        mounted() {
            this.$bus.$on('selectedSerieChange',(serie) => {
                this.selectedSerie = serie;
            })
        },
    }
</script>

<style scoped lang="scss">
    .infoSeries{
        p{
            color: #007bff;
            font-size: 1em;
            font-weight: bold;
            margin: 0.2em;
        }
    }
    .btn{
        margin: 1em;
    }
</style>