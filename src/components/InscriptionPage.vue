<template>

    <div class="insription">
        <h1>GéoQuizz</h1>
        <form @submit.prevent="setMembre">
            <div>
                <label >Full name : </label><input type="text" placeholder="Entrer le nom d'utilisateur" v-model="fullname" required/>
            </div>
            <div>
                <label >Email : </label><input type="text" placeholder="email" v-model="email" required/>
            </div>
            <div>
                <label >Password : </label><input type="password" placeholder="Entrer le mot de passe" v-model="password" required/>
            </div>
            <div>
                <input type="submit"  value="valider l'inscription">

            <button >
                <router-link class="button_is_text"  to='/' >Retour</router-link>
            </button>
            </div>

        </form>
    </div>


</template>

<script>
    export default {
        name: "InscriptionPage",

        data:function () {
            return {
                fullname:'',
                email:'',
                password:'',

            }

        },

        /*methods:{
            setMembre()
            {
                let parametre = {
                    fullname:this.fullname,
                    password:this.password,
                    email:this.email

                };
                axios.post("members",parametre).then((response) =>{

                    this.$router.push('/Connexion');
                })
            }
        }*/
    }
</script>

<style scoped>

</style>