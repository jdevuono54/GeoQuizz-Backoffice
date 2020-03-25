<template>
    <b-modal id="modal-addpicture" hide-footer>
        <template v-slot:modal-title>
            Ajouter une photo à votre bibliothèque
        </template>
        <div class="d-block text-center">
            <FormAddPicture v-if="step ===1" :picture="picture"></FormAddPicture>
            <b-btn type="button" class="btn btn-danger btn-block btnCancel" @click="cancel">Annuler</b-btn>
        </div>
    </b-modal>
</template>

<script>
    import FormAddPicture from "./FormAddPicture";
    export default {
        name: "ModalAllPicture",
        components: {FormAddPicture},
        beforeDestroy() {
            this.$bus.$off();
        },
        mounted() {
            this.$bus.$on('changeStep',(step) => {
                console.log(this.picture)
                //this.step = step;
            })
            this.$bus.$on('selectedSerieChange',(serie) => {
                this.picture.series.id_series = serie.id
            })
        },
        data(){
            return{
                step:1,
                picture:{
                    description:null,
                    series:{
                        id_series:null
                    }
                }
            }
        },
        methods:{
            cancel(){
                this.$bvModal.hide('modal-addpicture');
                //this.resetModal()
            },
            resetModal(){
                this.step = 1;
                this.picture = {
                    description:null,
                    series:{
                        id_series:null
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .btnCancel{
        margin-top: 1em;
    }
</style>