<template>
    <div class="signUp-form col-lg-8 offset-lg-2 col-md-12">
        <form>
        <div class="form-row">
            <div class="col">
                <input type="text" v-model="firstname" class="form-control" placeholder="Nom" required>
            </div>
            <div class="col">
                <input type="text" v-model="lastname" class="form-control" placeholder="Prénom" required>
            </div>
        </div>
        <div class="form-row">
            <div class="col">
                <input type="email" v-model="email" class="form-control" placeholder="Adresse mail" required>
            </div>
        </div>
        <div class="form-row">
            <div class="col">
                <input type="password" v-model="password" class="form-control" :class="{'is-invalid':!passwordsSame}" placeholder="Mot de passe" required>
            </div>
            <div class="col">
                <input type="password" v-model="checkPaswword" class="form-control" :class="{'is-invalid':!passwordsSame}" placeholder="Confirmation" required>
            </div>
        </div>
        <div class="form-row">
            <div class="col">
                <input type="number" v-model="phone" class="form-control" placeholder="Téléphone" required>
            </div>
        </div>
        <div class="form-row">
            <div class="col">
                <input type="number" v-model="street_number" class="form-control" placeholder="Numéro de rue" required>
            </div>
            <div class="col">
                <input type="text" v-model="street" class="form-control" placeholder="Rue" required>
            </div>
        </div>
        <div class="form-row">
            <div class="col">
                <input type="text" v-model="city" class="form-control" placeholder="Ville" required>
            </div>
            <div class="col">
                <input type="number" v-model="zip_code" class="form-control" placeholder="Code postal" required>
            </div>
        </div>
        <button type="submit" @submit.prevent="SignUp" class="btn btn-primary btn-block" :disabled="!passwordsSame">S'inscrire</button>
        <b-btn type="button" class="btn btn-danger btn-block" to="signin">Retour</b-btn>
            <label v-if="!passwordsSame" class="error">Les mots de passe ne correspondent pas.</label>

        </form>
    </div>
</template>

<script>
    export default {
        name: "SignUpForm",
        computed:{
          passwordsSame:function() {
              return this.password === this.checkPaswword;
          }
        },
        data(){
            return{
                firstname:null,
                lastname:null,
                email:null,
                password:null,
                checkPaswword:null,
                phone:null,
                street_number:null,
                street:null,
                city:null,
                zip_code:null
            }
        },
        methods:{
          SignUp(){
              return null
          }
        }
    }
</script>

<style scoped>
    .form-row{
        margin-bottom: 1em;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield;
    }
    .error{
        color: red;
        font-weight: bold;
    }
</style>