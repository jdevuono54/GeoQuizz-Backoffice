<template>
    <form v-on:submit.prevent="nextStep">
        <div class="form-row">
            <div class="col">
                <textarea class="form-control" v-model="picture.description" rows="3" placeholder="Description de la photo" required></textarea>
            </div>
        </div>
        <div class="form-row">
            <div class="col">
                <div><label>Voulez vous ajouter directement la photo à une série éxistante ?</label></div>
            </div>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Suivant</button>
    </form>
</template>

<script>
    export default {
        name: "FormAddPicture",
        props:["picture"],
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