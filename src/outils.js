export const outils = {
    methods : {
        getpic(id) {
            for(var i= 0; i < this.$store.state.allPicture.length; i++)
            {
                let picture = this.$store.state.allPicture[i];
                if(id == picture.id){
                    return picture;
                }
            }

        },

    }
}