<template>
    <form v-on:submit.prevent="nextStep">
        <div class="form-row">
            <div class="col">
                <textarea class="form-control" rows="3" placeholder="Description de la photo" required></textarea>
            </div>
        </div>
        <div class="form-row">
            <div class="col">
                <div><label>Voulez vous ajouter directement la photo à une série éxistante ?</label></div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" v-model="checked" id="radio1" value="true">
                    <label class="form-check-label" for="radio1">Oui</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" v-model="checked" id="radio2" value="false">
                    <label class="form-check-label" for="radio2">Non</label>
                </div>
            </div>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Suivant</button>
        <b-btn type="button" class="btn btn-danger btn-block" @click="this.$bvModal.show('modal-addpicture')">Annuler</b-btn>
    </form>
</template>

<script>
    export default {
        name: "FormAddPicture",
        props:["picture"],
        data(){
            return{
                checked:null,
            }
        },
        methods:{
            nextStep(){
                return null;
            }
        }
    }
</script>

<style scoped>
    .col{
        margin-bottom: 1em;
    }
</style>