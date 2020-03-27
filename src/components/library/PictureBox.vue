<template>
    <router-link :to="{
                    name : 'BigPicture',
                    params : {
                        identifiant : picture.id
                    }
                }">
        <div class="box">
            <img :src="picture.link">
            <div>{{ picture.description }}</div>
        </div>
    </router-link>

</template>

<script>
    export default {
        name: "PictureBox",
        props:["picture"],

        methods:{

        }
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