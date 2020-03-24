<template>
    <div class="login-form col-6 offset-3">
        <form v-on:submit.prevent="signIn">
        <div class="form-group">
            <input type="email" class="form-control" placeholder="Votre adresse mail" required>
        </div>
        <div class="form-group">
            <input type="password" class="form-control" placeholder="Votre mot de passe" required>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Connexion</button>
        </form>
        <router-link to="signup">Pas de compte ? S'inscrire</router-link>
    </div>
</template>

<script>
    export default {
        name: "SignIn",
        methods:{
            signIn(){
                return null
            }
        }
    }
</script>

<style scoped lang="scss">
    a{
        font-weight: bold;
        font-size: 1.2em;
    }
</style>