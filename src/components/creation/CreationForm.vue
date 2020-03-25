<template>
    <div class="signUp-form col-lg-8 offset-lg-2 col-md-12">
        <form v-on:submit.prevent="nextStep">
            <div class="form-row">
                <div class="col">
                    <input type="text" v-model="series.city" class="form-control" placeholder="Ville" required>
                </div>
            </div>
            <div class="form-row">
                <div class="col">
                    <input type="number" v-model="series.distance" class="form-control" placeholder="Distance d'erreur (mètre)" required>
                </div>
            </div>
            <div class="form-row">
                <div class="col">
                    <input type="number" v-model="series.nb_pictures" class="form-control" placeholder="Nombre minimum de photos" required>
                </div>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Suivant</button>
            <b-btn type="button" class="btn btn-danger btn-block" to="home">Retour</b-btn>
        </form>
    </div>
</template>

<script>
    export default {
        name: "CreationForm",
        props:["series"],
        methods:{
            nextStep(){
                this.$bus.$emit("changeStep",2)
            }
        }
    }
</script>

<style scoped>
    .form-row{
        margin-bottom: 1em;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield;
    }
</style>