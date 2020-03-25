export const outils = {
    methods : {
        getSerie(id) {
            for(var i= 0; i < this.$store.state.lesSeries.length; i++)
            {
                let serie = this.$store.state.lesSeries[i];
                if(id == serie.id){
                    this.$store.state.id_serie = id
                    return serie;
                }
            }

        },

    }
}