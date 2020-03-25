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
                <search-bar-serie></search-bar-serie>
            </div>
        </div>
        <button type="submit" class="btn btn-primary btn-block" :disabled="picture.description === null">Suivant</button>
    </form>
</template>

<script>
    import SearchBarSerie from "./SearchBarSerie";
    export default {
        name: "FormAddPicture",
        components: {SearchBarSerie},
        props:["picture"],
        methods:{
            nextStep(){
                this.$bus.$emit("changeStep",2);
            }
        }
    }
</script>

<style scoped>
    .col{
        margin-bottom: 1em;
    }
</style>