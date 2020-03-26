<template>
    <div >
        <img :src="picture.link" class="pic">
        <label class="description">Déscription: {{picture.description}}
        </label>

    </div>

</template>

<script>
    export default {
        name : 'BigPicture',

        data:function () {
            return {
                picture : false
            }
        },
        mounted()  {
            this.picture = this.getpic(this.$route.params.identifiant);

        },
        methods:{


        }
    }
</script>
<style>
    .pic{
        margin-top: 7em;
        margin-left: 7em;
        margin-right: 3em;

    }
    .description{
        font-family: Serif;
        font: bold;

    }
</style>