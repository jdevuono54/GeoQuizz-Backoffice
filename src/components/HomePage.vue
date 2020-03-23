<template>
  <div>
      <div class="container-fluid home">
          <div class="row">
              <div class="col-lg-4 offset-lg-4 col-md-8 offset-md-2 container-game text-center">
                  <div class="title">
                      <img alt="logo" src="../assets/logo_without_text.svg" width="64">
                      <h1>GeoQuizz</h1>
                  </div>
                  <div>
                      <b-btn class="btn"  to='/Connexion' >Connexion</b-btn>
                      <b-btn class="btn"  to='/Inscription' >Inscription</b-btn>
                  </div>
              </div>
          </div>
      </div>


  </div>
</template>

<script>
export default {
  name: 'HomePage',

}
</script>


<style lang="scss" scoped>
    .home {
        min-height: 100vh;


        .container-game {
            margin-top: 50vh;
            transform: translateY(-50%);

            h1 {
                display: inline;
                font-size: 4em;

            }

            img {
                margin-right: 1%;
                vertical-align: top;
            }

            .btn {
                margin-top: 3em;
                margin-left: 1em;
                background-color: lightgrey;
                color: dodgerblue;
                width: 10em;
            }
        }
    }
</style>
