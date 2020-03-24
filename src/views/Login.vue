<template>
    <div class="container-fluid login">
        <div class="row">
            <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 container-login text-center">
                <div class="title">
                    <img alt="logo" src="../assets/logo_without_text.svg" width="64">
                    <h1>Backoffice</h1>
                </div>
                <LoginForm></LoginForm>
            </div>
        </div>
    </div>
</template>

<script>
    import LoginForm from "../components/Login/LoginForm";
    export default {
        name: "Login",
        components: {LoginForm}
    }
</script>

<style scoped lang="scss">
    .login {
        min-height: 100vh;
        background-image: url("../assets/auth/background_image.svg");
        background-size: cover;

        .container-login {
            margin-top: 30vh;
            transform: translateY(-30%);

            h1 {
                display: inline;
                font-size: 4em;
            }

            img {
                margin-right: 1%;
                vertical-align: top;
            }

            .title {
                margin-bottom: 1em;
            }
        }
    }
</style>