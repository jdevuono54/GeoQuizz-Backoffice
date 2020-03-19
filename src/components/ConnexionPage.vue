<template>
    <div class="Connexion form-group" >
        <h2>GéoQuizz</h2>
        <form @submit.prevent="connexionMembre">
            <input type="text" placeholder="Entrer le nom d'utilisateur" v-model="email" required class="form-control"  >
            <br>
            <input type="password" placeholder="Entrer le mot de passe" v-model="password" required class="form-control">
            <br>
            <input type="submit"  value='LOGIN'  class="btn btn-primary">
            <button >
                <router-link class="button_is_text"  to='/Inscription' >Créer un compte</router-link>
            </button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'ConnexionPage',
        mounted() {

        },
        data: function () {

            return {
                email:'',
                password:''
            }
        },
        /*methods:{
            connexionMembre(){
                let parametre = {

                    email:this.email,
                    password:this.password

                };

                axios.post("members/signin",parametre).then((response) =>{
                    this.$router.push('/');
                    this.$store.commit('setSession',response.data);
                }).catch(error => {
                    alert(error.response.data.message);
                })
            }
        }*/

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
