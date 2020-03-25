<template>
    <b-modal id="modal-addpicture" hide-footer>
        <template v-slot:modal-title>
            Ajouter une photo à votre bibliothèque
        </template>
        <div class="d-block text-center">
            <h3>Hello From This Modal!</h3>
        </div>
        <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Close Me</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: "ModalAllPicture"
    }
</script>

<style scoped>

</style>