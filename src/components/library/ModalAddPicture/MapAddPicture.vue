<template>
    <div class="form-row">
        <div class="col">
            <div><label>Placer la photo sur la map</label></div>

            <l-map id="map" ref="map" :zoom="zoom" :center="center">
                <l-tile-layer :url="url"/>
            </l-map>
        </div>
    </div>
</template>

<script>
    import { latLng } from "leaflet";
    import L from "leaflet"
    import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
    import 'leaflet/dist/leaflet.css';

    export default {
        name: "mapForm",
        props:["picture"],
        components: {
            LMap,
            LTileLayer,
            LMarker,
        },
        data(){
            return{
                loopLoadMap:null,
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                center: latLng("46.227638", "2.213749"),
                zoom: 6
            }
        },
        mounted() {
            if(this.picture.series.id_series !== null){
                this.$axios.get("series/"+this.picture.series.id_series, {
                    headers: {Authorization: 'Bearer ' + this.$store.state.user.token}
                }).then((response) => {
                    this.center = latLng(response.data.series.latitude,response.data.series.longitude);
                    console.log("Chargement des informations de la série réussie");
                }).catch(error => {
                    console.log("Erreur lors du chargement des informations de la series");
                    this.$root.makeToast("Erreur lors du chargement des informations de la series");
                })
            }
            this.loopLoadMap = setInterval( () => {
                this.$refs.map.mapObject.invalidateSize();
            }, 100);
        },
        beforeDestroy() {
            clearInterval(this.loopLoadMap)
        },
    }
</script>

<style scoped>
    #map{
        height: 500px;
        width: 100%;
        margin-bottom: 1em;
    }
</style>