<template>
    <div class="login-form col-6 offset-3">
        <div class="form-group">
            <input type="email" class="form-control" placeholder="Votre adresse mail">
        </div>
        <div class="form-group">
            <input type="password" class="form-control" placeholder="Votre mot de passe">
        </div>
        <button type="submit" class="btn btn-primary btn-block">Connexion</button>
        <router-link to="signup">Pas de compte ? S'inscrire</router-link>
    </div>
</template>

<script>
    export default {
        name: "SignIn",
        methods:{
            login(){


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