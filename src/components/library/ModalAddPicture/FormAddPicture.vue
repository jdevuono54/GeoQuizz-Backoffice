<template>
    <form v-on:submit.prevent="nextStep">
        <div class="form-row">
            <div class="col">
                <textarea class="form-control" v-model="picture.description" rows="3" placeholder="Description de la photo" required></textarea>
            </div>
        </div>
        <div class="form-row">
            <b-form-file
                    v-model="picture.img"
                    :state="Boolean(picture.img)"
                    placeholder="Importer votre image"
                    drop-placeholder="Glissez votre image içi."
                    accept=".jpg, .png"
                    @change="testExtensionImg"
            ></b-form-file>
        </div>
        <div class="form-row">
            <div class="col">
                <div><label>Voulez vous ajouter directement la photo à une série éxistante ?</label></div>
                <search-bar-serie></search-bar-serie>
            </div>
        </div>
        <button type="submit" class="btn btn-primary btn-block" :disabled="picture.description === null || picture.img === null">Suivant</button>
    </form>
</template>

<script>
    import SearchBarSerie from "../../SearchBarSerie";
    export default {
        name: "FormAddPicture",
        components: {SearchBarSerie},
        props:["picture"],
        methods:{
            testExtensionImg(e){
                if(e.target.value.endsWith(".jpg") || e.target.value.endsWith(".png")){
                    console.log("Image valide")
                }else{
                    e.target.value = null;
                    console.log("Image invalide")
                }
            },
            nextStep(){
                this.$bus.$emit("changeStep",2);
            }
        }
    }
</script>

<style scoped>
    .col{
        margin-bottom: 1em;
        margin-top: 1em;
    }
</style>