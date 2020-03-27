<template>
    <div>
        <div v-show="step === 0">
            <search-bar-serie/>

            <div v-if="selectedSerie" class="infoSeries">
                <p>Identifiant de la série : {{ selectedSerie.id }}</p><p> Ville : {{ selectedSerie.city }}</p><p> Nombre de photos : {{ selectedSerie.nb_pictures }}</p><p> Date de dernière mise à jour : {{ selectedSerie.updated_at }}</p>

                <div>
                    <button type="button" class="btn btn-info" @click="step = 1">Modifier les informations de la série</button>
                    <button type="button" class="btn btn-primary" @click="step = 3">Ajouter des photos à la série</button>
                </div>
            </div>
        </div>

        <CreationForm :series="selectedSerie" v-if="step === 1"/>
        <MapForm :series="selectedSerie" v-if="step === 2"></MapForm>
        <add-pictures-series-form :series="selectedSerie" v-if="step === 3"></add-pictures-series-form>
    </div>
</template>

<script>
    import SearchBarSerie from "../../SearchBarSerie";
    import CreationForm from "../../creation/CreationForm";
    import MapForm from "../../creation/MapForm";
    import AddPicturesSeriesForm from "../addPictures/AddPicturesSeriesForm";

    export default {
        name: "UpdateSeriesMenu",
        components: {AddPicturesSeriesForm, SearchBarSerie,CreationForm,MapForm},
        data(){
            return{
                selectedSerie:null,
                step:0
            }
        },
        beforeDestroy() {
            this.$bus.$off();
        },
        mounted() {
            this.$bus.$on('selectedSerieChange',(serie) => {
                this.selectedSerie = serie;
            })
            this.$bus.$on('changeStep',(step) => {
                this.step = step;
            })
            this.$bus.$on('updateSeries',(step) => {
                this.updateSerie();
            })
        },
        methods:{
            updateSerie(){
                this.$axios.put("series/"+this.selectedSerie.id, {
                    city:this.selectedSerie.city,
                    distance:parseInt(this.selectedSerie.distance),
                    latitude:this.selectedSerie.latitude.toString(),
                    longitude:this.selectedSerie.longitude.toString(),
                    zoom:parseInt(this.selectedSerie.zoom),
                    nb_pictures:this.selectedSerie.nb_pictures
                }, {
                    headers: {Authorization: 'Bearer ' + this.$store.state.user.token}
                }).then((response) => {
                    this.$router.push("home")
                    this.$root.$bvToast.toast("Modification de la série réussie !", {
                        title: "Succès !",
                        variant: "success",
                        noCloseButton: true
                    })
                    console.log("Modification de la série réussie")
                }).catch(error => {
                    console.log("Erreur lors de la modification de la série")
                    console.log(error.response.data)
                    this.$root.makeToast("Erreur lors de la modification de la série")
                })
            }
        }
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