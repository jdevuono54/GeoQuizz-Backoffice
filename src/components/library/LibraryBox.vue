<template>
    <div class="container-fluid libraryBox">
        <div class="row text-center rowBtnAddPicture">
            <button type="button" class="btn btn-primary btnAddPicture col-sm-12 col-md-3 offset-md-9 col-lg-2 offset-lg-10">Ajouter une photo</button>
        </div>
        <div class="row">
            <div class="pictureBox col-sm-12 col-md-3 col-lg-2" v-for="picture in picturesUser">
                <PictureBox :picture="picture"></PictureBox>
            </div>
        </div>
    </div>
</template>

<script>
    import PictureBox from "./PictureBox";
    export default {
        name: "LibraryBox",
        components: {PictureBox},
        mounted(){
            this.getAllPicturesUser();
        },
        data(){
            return{
                picturesUser:[]
            }
        },
        methods:{
            getAllPicturesUser(){
                this.$axios.get("pictures", {
                    headers: {Authorization: 'Bearer ' + this.$store.state.user.token}
                }).then((response) => {
                    console.log("Récupération des photos réussie")
                    this.picturesUser = response.data.pictures
                }).catch(error => {
                    console.log("Erreur lors de la connexion")
                    this.$root.makeToast(error.response.data.message)
                })
            }
        }
    }
</script>

<style scoped>
    .rowBtnAddPicture{
        margin: 1em 1em 0 1em;
    }
</style>