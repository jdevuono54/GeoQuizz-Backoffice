<template>
    <div class="container-fluid Home">
        <div class="row">
            <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 container-home text-center">
                <b-btn type="button" class="btn btn-block btn-primary">Créer une série</b-btn>
                <b-btn type="button" class="btn btn-block btn-primary">Modifier une série</b-btn>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped lang="scss">
    .Home {
        min-height: 100vh;
        background-image: url("../assets/auth/background_image.svg");
        background-size: cover;

        .container-home {
            margin-top: 50vh;
            transform: translateY(-50%);

            button{
                background-color: #007bff;
            }
        }
    }
</style>