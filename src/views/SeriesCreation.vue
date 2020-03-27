<template>
    <div class="container-fluid Creation">
        <div class="row">
            <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 container-creation text-center">
                <div class="title">
                    <img alt="logo" src="../assets/logo_without_text.svg" width="64">
                    <h3>Créer une nouvelle série</h3>
                </div>
                <CreationForm :series="series" v-if="step === 1"/>
                <MapForm :series="series" v-if="step === 2"></MapForm>
            </div>
        </div>
    </div>
</template>

<script>
    import CreationForm from "../components/creation/CreationForm";
    import MapForm from "../components/creation/MapForm";
    export default {
        name: "SeriesCreation",
        components: {MapForm, CreationForm},
        data(){
            return{
                step:1,
                series:{
                    city:null,
                    distance:null,
                    nb_pictures:null,
                    latitude:null,
                    longitude:null,
                    zoom:null
                }
            }
        },
        beforeDestroy() {
            this.$bus.$off();
        },
        mounted(){
            this.$bus.$on('changeStep',(step) => {
                this.step = step;
            })
            this.$bus.$on('createSeries',() => {
                this.createSeries();
            })
        },
        methods:{
          createSeries(){
              this.$axios.post("series", {
                  city:this.series.city,
                  distance:parseInt(this.series.distance),
                  latitude:this.series.latitude,
                  longitude:this.series.longitude,
                  zoom:parseInt(this.series.zoom),
                  nb_pictures:this.series.nb_pictures
              }, {
                  headers: {Authorization: 'Bearer ' + this.$store.state.user.token}
              }).then((response) => {
                  this.$router.push("home")
                  this.$root.$bvToast.toast("Création de la série réussie !", {
                      title: "Succès !",
                      variant: "success",
                      noCloseButton: true
                  })
                  console.log("Création de la série réussie")
              }).catch(error => {
                  console.log("Erreur lors de la création de la série")
                  console.log(error.response.data)
                  this.$root.makeToast("Erreur lors de la création de la série")
              })
          }
        }
    }
</script>

<style scoped lang="scss">
    .Creation {
        min-height: 100vh;
        background-image: url("../assets/auth/background_image.svg");
        background-size: cover;

        .container-creation {
            margin-top: 30vh;
            transform: translateY(-30%);

            h3 {
                display: block;
                font-weight: bold;
            }

            img {
                margin-right: 1%;
                vertical-align: top;
            }

            .title {
                margin-bottom: 1em;
            }
        }
    }
</style>