<template>
    <div>
        <h4>Ajouter une photo dans la série : {{ series.city }}</h4>

        <div>
            <img v-if="selected !== null" :src="selected.link" />
            <v-select :options="pictures" label="description" placeholder="Choisissez une photo à ajouter à la série" v-model="selected"/>
            <button type="button" class="btn btn-primary" v-if="selected !== null" @click="addPictureSerie">Ajouter l'image !</button>
        </div>
    </div>
</template>

<script>
    import vSelect from "vue-select";

    export default {
        name: "AddPicturesSeriesForm",
        props:["series"],
        components:{
            vSelect
        },
        data(){
            return{
                pictures:[],
                selected:null
            }
        },
        mounted() {
            this.$axios.get("serie/"+this.series.id+"/pictures", {
                headers: {Authorization: 'Bearer ' + this.$store.state.user.token}
            }).then((response) => {
                this.pictures = response.data.pictures
                console.log("Chargement des photos non présente dans la série réussie");
            }).catch(error => {
                console.log("Erreur lors du chargement des photos non présente dans la série")
                this.$root.makeToast("Erreur lors du chargement des photos non présente dans la série")
            })
        },
        methods:{
            addPictureSerie(){
                this.$axios.post("serie/"+this.series.id+"/picture", {
                    id:this.selected.id
                }, {
                    headers: {Authorization: 'Bearer ' + this.$store.state.user.token}
                }).then((response) => {
                    this.pictures.splice(this.pictures.indexOf(this.selected),1)
                    this.selected = null;
                    this.$root.$bvToast.toast("La photo a correctement été ajoutée", {
                        title: "Succès !",
                        variant: "success",
                        noCloseButton: true
                    })
                    console.log("Association de la photo à la série réussie")
                }).catch(error => {
                    console.log("Erreur lors de l'association de la photo à la série")
                    this.$root.makeToast("Erreur lors de l'association de la photo à la série")
                })
            },
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../../node_modules/vue-select/dist/vue-select.css";

    .v-select{
        background-color: white;
    }
    img{
        max-height: 150px;
        margin-bottom: 1em;
    }
    .btn{
        margin-top: 1em;
    }
</style>