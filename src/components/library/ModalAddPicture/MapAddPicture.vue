<template>
    <div class="form-row">
        <div class="col">
            <div><label>Placer la photo sur la map</label></div>
            <l-map id="map" @click="addMarker" ref="map" :zoom="6" :center="center">
                <l-tile-layer :url="url"/>
            </l-map>
            <button type="button" class="btn btn-primary btn-block" :disabled="!marker" @click="addPicture" v-if="!send">Ajouter la photo</button>
            <p v-if="send">Veuillez patientez <b-spinner variant="primary" small label="Small Text Centered"></b-spinner></p>
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
        props:["picture","send"],
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
                icon: L.icon({
                    iconUrl: require('leaflet/dist/images/marker-icon.png'),
                    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
                    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png')
                }),
                marker:null,
            }
        },
        methods:{
            addMarker(e){
                if(this.marker === null){
                    this.marker = new L.marker(e.latlng, { icon : this.icon }).addTo(this.$refs.map.mapObject);
                    this.picture.latLng = e.latlng;
                }
                else{
                    this.marker.remove();
                    this.marker = null;
                    this.picture.latLng = null;
                }
            },
            addPicture(){
                this.$bus.$emit("sendPicture")
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