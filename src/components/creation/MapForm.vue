<template>
    <b-btn type="button" class="btn btn-danger btn-block" @click="prevStep">Retour</b-btn>
</template>

<script>
    export default {
        name: "mapForm",
        props:["series"],
        methods:{
            prevStep(){
                this.$bus.$emit("changeStep",1)
            }
        }
    }
</script>

<style scoped>

</style>