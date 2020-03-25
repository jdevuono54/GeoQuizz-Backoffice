<template>
    <div>
        <h5>Choissiez la carte de départ</h5>
        <l-map id="map" ref="map" :zoom="6" :center="center">
            <l-tile-layer :url="url"/>
        </l-map>
        <button type="button" class="btn btn-primary btn-block" @click="validMap">Créer ma série !</button>
        <b-btn type="button" class="btn btn-danger btn-block" @click="prevStep">Retour</b-btn>
    </div>
</template>

<script>
    import { latLng } from "leaflet";
    import L from "leaflet"
    import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
    import 'leaflet/dist/leaflet.css';

    export default {
        name: "mapForm",
        props:["series"],
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
            }
        },
        methods:{
            prevStep(){
                this.$bus.$emit("changeStep",1)
            },
            validMap(){
                this.series.latitude = this.$refs.map.mapObject.getCenter().lat;
                this.series.longitude = this.$refs.map.mapObject.getCenter().lng;
                this.series.zoom = this.$refs.map.mapObject.getZoom();

                this.$bus.$emit("createSeries");
            }
        },
        mounted() {
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