<template>

    <div>
        <b-btn type="button" class="btn btn-block btn-primary" to="create">Créer une série</b-btn>
        <b-btn type="button" class="btn btn-block btn-primary" to="library">Ma librairie</b-btn>
        <b-btn type="button" class="btn btn-block btn-primary">Modifier une série</b-btn>
    </div>
</template>

<script>

    export default {
        name: "HomeMenu",

    }
</script>

<style scoped>
    a{
        background-color: #007bff !important;
    }
</style>