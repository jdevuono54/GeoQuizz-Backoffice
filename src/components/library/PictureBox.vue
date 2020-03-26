<template>
    <div class="box">
        <img :src="picture.link">
        <router-link :to="{
                    name : 'BigPicture',
                    params : {
                        identifiant : picture.id
                    }
                }" class="nav-link">{{ picture.description }}</router-link>
    </div>
</template>

<script>
    export default {
        name: "PictureBox",
        props:["picture"],

    }
</script>

<style scoped lang="scss">
    .box{
        padding: 1em;
        border: 1px solid black;
        margin-top: 1em;
        img{
            max-width: 100%;
        }
        p{
            margin: 0;
            text-align: center;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
    }
</style>