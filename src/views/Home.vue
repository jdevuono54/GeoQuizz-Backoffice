<template>
    <div class="container-fluid Home">
        <div class="row">
            <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 container-home text-center">
                <div class="title">
                    <img alt="logo" src="../assets/logo_without_text.svg" width="64">
                    <h3>Backoffice</h3>
                </div>
                <home-menu></home-menu>
            </div>
        </div>
    </div>
</template>

<script>
    import HomeMenu from "../components/home/HomeMenu";
    export default {
        name: "Home",
        components: {HomeMenu}
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

            h3 {
                display: inline-block;
                font-weight: bold;
            }

            img {
                margin-right: 1em;
                margin-bottom: 1em;
                vertical-align: center;
            }
        }
    }
</style>