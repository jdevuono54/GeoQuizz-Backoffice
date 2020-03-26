<template>
    <div>ok</div>
</template>

<script>
    export default {
        name: "SeriesAddPictures",
        data(){
            return{
                series:null
            }
        },
        mounted() {
            if(this.$route.query.id !== null)
            {
                this.$axios.get("series/"+this.$route.query.id, {
                    headers: {Authorization: 'Bearer ' + this.$store.state.user.token}
                }).then((response) => {
                    this.series = response.data.series
                    console.log("Chargement de la série réussie");
                }).catch(error => {
                    this.$router.push("/home");
                    console.log("Erreur lors du chargement de la serie")
                    this.$root.makeToast("Erreur lors du chargement de la series")
                })
            }
            else{
                this.$router.push("/home");
            }
        }
    }
</script>

<style scoped>

</style>