<template>
    <b-modal id="modal-addpicture" hide-footer>
        <template v-slot:modal-title>
            Ajouter une photo à votre bibliothèque
        </template>
        <div class="d-block text-center">
            <FormAddPicture></FormAddPicture>
        </div>
    </b-modal>
</template>

<script>
    import FormAddPicture from "./FormAddPicture";
    export default {
        name: "ModalAllPicture",
        components: {FormAddPicture},
        data(){
            return{
                step:1
            }
        }
    }
</script>

<style scoped>

</style>