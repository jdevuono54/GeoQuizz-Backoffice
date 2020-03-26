<template>
    <b-modal id="modal-addpicture" hide-footer no-close-on-backdrop no-close-on-esc no-enforce-focus hide-header-close>
        <template v-slot:modal-title>
            Ajouter une photo à votre bibliothèque
        </template>
        <div class="d-block text-center">
            <FormAddPicture v-show="step === 1" :picture="picture"></FormAddPicture>
            <MapAddPicture v-show="step === 2" :picture="picture" :send="send"></MapAddPicture>
            <b-btn type="button" class="btn btn-danger btn-block btnCancel" @click="cancel" v-if="!send" disabled="disabled">Annuler (WIP)</b-btn>
        </div>
    </b-modal>
</template>

<script>
    import FormAddPicture from "./FormAddPicture";
    import MapAddPicture from "./MapAddPicture";
    export default {
        name: "ModalAllPicture",
        components: {MapAddPicture, FormAddPicture},
        beforeDestroy() {
            this.$bus.$off();
        },
        mounted() {
            this.$bus.$on('changeStep',(step) => {
                this.step = step;
            })
            this.$bus.$on('selectedSerieChange',(serie) => {
                this.picture.series.id_series = serie.id
            })
            this.$bus.$on('sendPicture',() => {
                this.send = true;
                this.addPicture()
            })
        },
        data(){
            return{
                apiKey:"0b0174ed0aded05168ca96a1ea5e9e84",
                step:1,
                send:false,
                picture:{
                    description:null,
                    img:null,
                    latLng:null,
                    series:{
                        id_series:null
                    }
                }
            }
        },
        methods:{
            cancel(){
                this.$bvModal.hide('modal-addpicture');
                this.resetModal()
            },
            resetModal(){
                this.step = 1;
                this.picture = {
                    description:null,
                    img:null,
                    latLng:null,
                    series:{
                        id_series:null
                    }
                }
            },
            addPicture(){
                let reader = new FileReader();
                reader.readAsDataURL(this.picture.img);
                reader.onload = () => {
                    let result = reader.result.substring(23)
                    this.postToImgBB(result);
                };
                reader.onerror = function (error) {
                    console.log('Error: ', error);
                    this.$root.makeToast("Erreur lors de la conversion de l'image")

                };
            },
            postToImgBB(imgB64){
                let bodyFormData = new FormData();
                bodyFormData.set('image', imgB64);
                this.$axios.post("https://api.imgbb.com/1/upload?key="+this.apiKey,bodyFormData).then((response) => {
                    this.addImgBdd(response.data.data.url)
                    console.log("Envoie à imgBB réussie")
                    console.log(response.data)
                }).catch(error => {
                    this.$root.makeToast("Erreur lors de l'envoi à imgBB")
                    console.log(error.response)
                })
            },
            addImgBdd(link){
                this.$axios.post("pictures", {
                    description:this.picture.description,
                    latitude:this.picture.latLng.lat,
                    longitude:this.picture.latLng.lng,
                    link:link
                }, {
                    headers: {Authorization: 'Bearer ' + this.$store.state.user.token}
                }).then((response) => {
                    if(this.picture.series.id_series !== null){
                        console.log("Serie détecté");
                        this.addImgToSeriesBdd(response.data.pictures.id);
                    }
                    else{
                        location.reload()
                        console.log("Pas de série")
                    }
                    console.log("Enregistrement de la photo réussie")
                }).catch(error => {
                    console.log("Erreur lors de l'enregistrement de la photo")
                    this.$root.makeToast("Erreur lors de l'enregistrement de la photo")
                })
            },
            addImgToSeriesBdd(idImg){
                this.$axios.post("serie/"+this.picture.series.id_series+"/picture", {
                    id:idImg
                }, {
                    headers: {Authorization: 'Bearer ' + this.$store.state.user.token}
                }).then((response) => {
                    location.reload()
                    console.log("Association de la photo à la série réussie")
                }).catch(error => {
                    console.log("Erreur lors de l'association de la photo à la série")
                    this.$root.makeToast("Erreur lors de l'association de la photo à la série")
                })
            }
        }
    }
</script>

<style scoped>
    .btnCancel{
        margin-top: 1em;
    }
</style>