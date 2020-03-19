<template>
    <v-select :options="series" placeholder="Choisissez une série" @input="selectedSerieChange" />
</template>

<script>
    import vSelect from 'vue-select'
    export default {
        name: "SearchBarSerie",
        props:["selectedSerie"],
        components:{
            vSelect
        },
        data(){
            return{
                series:["Nancy 1","Nancy 2","Metz"]
            }
        },
        methods:{
            selectedSerieChange(value){
                this.$bus.$emit('selectedSerieChange', value);
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "~vue-select/dist/vue-select.css";

    .v-select{
        background-color: white;
    }
</style>