<template>
    <div class="login-form col-6 offset-3">
        <form v-on:submit.prevent="signIn">
            <div class="form-group">
                <input type="email" v-model="email" class="form-control" placeholder="Votre adresse mail" required>
            </div>
            <div class="form-group">
                <input type="password" v-model="password" class="form-control" placeholder="Votre mot de passe" required>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Connexion</button>
        </form>
        <router-link to="signup">Pas de compte ? S'inscrire</router-link>
    </div>
</template>

<script>
    export default {
        name: "SignIn",
        data() {
            return {
                email: null,
                password: null,
            }
        },
        methods: {
            signIn() {
                this.$axios.post("user/signin", {
                    withCredentials: true
                }, {
                    auth: {
                        username: this.email,
                        password: this.password
                    }
                }).then((response) => {
                    this.$store.commit('saveUser', response.data);
                    this.$router.push('/home');
                    console.log("Connexion réussie")
                }).catch(error => {
                    console.log("Erreur lors de la connexion")
                    this.$root.makeToast(error.response.data)
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    a {
        font-weight: bold;
        font-size: 1.2em;
    }
</style>