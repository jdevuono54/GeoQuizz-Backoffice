<template>
    <div class="container-fluid update">
        <div class="row">
            <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 container-update text-center">
                <div class="title">
                    <img alt="logo" src="../assets/logo_without_text.svg" width="64">
                    <h3>Modifier une série</h3>
                </div>
                <UpdateSeriesMenu></UpdateSeriesMenu>
            </div>
        </div>
    </div>
</template>

<script>
    import UpdateSeriesMenu from "../components/update/UpdateSearchMenu/UpdateSeriesMenu";
    export default {
        name: "SeriesUpdate",
        components: {UpdateSeriesMenu}
    }
</script>

<style scoped lang="scss">
    .update {
        min-height: 100vh;
        background-image: url("../assets/auth/background_image.svg");
        background-size: cover;

    .container-update {
        margin-top: 50vh;
        transform: translateY(-50%);

    }
    }
</style>