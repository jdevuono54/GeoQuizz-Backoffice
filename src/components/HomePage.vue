<template>
  <div>
      <div class="container-fluid home">
          <div class="row">
              <div class="col-lg-4 offset-lg-4 col-md-8 offset-md-2 container-game text-center">
                  <div class="title">
                      <img alt="logo" src="../assets/logo.png" width="64">
                      <h1>GeoQuizz</h1>
                  </div>
                  <div >
                      <button class="start-game">
                          <router-link class="button_is_text"  to='/Connexion' >Connexion</router-link>
                      </button>
                      <button class="start-game">
                          <router-link class="button_is_text"  to='/Inscription' >Inscription</router-link>
                      </button>
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

            .start-game {
                margin-top: 1em;
                margin-left: 2em;
            }
        }
    }
</style>
