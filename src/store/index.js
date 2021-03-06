import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from "vuex-persist";


Vue.use(Vuex)
const vp = new VuexPersistence({
  key:"store",
  storage: window.localStorage
})

export default new Vuex.Store({
  plugins:[vp.plugin],
  state: {
    membre: false,
    tokenSession: false,
    user_id:'',
    lesSeries: [],
    listeDesPhotos: [],
    idPhoto:'',

  },
  mutations: {
    setSession(state,data){
      state.tokenSession=data.token;
      state.membre=true;
      state.user_id=data.user.id
    },
    setSeries(state,data){
      state.lesSeries=data.series;
    },
    setPicture(state,data){
      state.listeDesPhotos=data.pictures
    },
    setIdPhoto(state,data){
      state.idPhoto=data.pictures
    },


  },
  actions: {
  },
  modules: {
  }
})
