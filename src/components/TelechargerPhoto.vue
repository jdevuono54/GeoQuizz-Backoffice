<template>
    <div>
        <form @submit.prevent="AjoutPhoto">
            <h5>Renseignez la photo à ajouter: </h5>
            <div>
                <input type="text" placeholder="description" v-model="description" required class="form-control"/>
            </div>
            <br>
            <div>
                <input type="text" placeholder="latitude" v-model="latitude" required class="form-control"/>
            </div>
            <br>
            <div>
                <input type="text" placeholder="longitude" v-model="longitude" required class="form-control"/>
            </div>
            <br>
            <div>
                <input type="text" placeholder="link" v-model="link" required class="form-control"/>
            </div>
            <div>
                <input class="btn" type="submit"  value="Ajouter">
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'TelechargerPhoto',

        data:function () {
            return {
                latitude:'',
                longitude:'',
                description:'',
                link:'',

                serie: false,
                tbPhoto:[]
            }
        },
        methods:{
            AjoutPhoto(){

                let parametre = {

                    latitude:this.latitude,
                    longitude:this.longitude,
                    description:this.description,
                    link:this.link
                };


                this.$axios.post("picture",parametre,{
                    headers: { Authorization: "Bearer " + this.$store.state.tokenSession
                    }
                }).then((response) =>{
                    alert(this.$route.params.identifiant)
                    /*this.tbPhoto= response.data.id*/
                    /*this.$axios.post("series"+this.$route.params.identifiant,this.tbPhoto ,{
                        headers: { Authorization: "Bearer " + this.$store.state.tokenSession
                        }
                    }).then((response) =>{


                    })*/
                })
            }
        },
        mounted() {
            this.serie = this.getSerie(this.$route.params.identifiant);
            /*alert(this.$route.params.identifiant)*/
        }
    }
</script>


<style lang="scss" scoped>
    .home {
        min-height: 100vh;


        .container-game {
            margin-top: 50vh;
            transform: translateY(-50%);

            h1 {
                display: inline;
                font-size: 4em;

            }

            img {
                margin-right: 1%;
                vertical-align: top;
            }

            .btn {
                margin-top: 3em;
                margin-left: 1em;
                background-color: lightgrey;
                color: dodgerblue;
                width: 10em;
            }
        }
    }
</style>
