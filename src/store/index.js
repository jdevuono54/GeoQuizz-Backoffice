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
  },
  mutations: {
    setSession(state,data){
      state.tokenSession=data.token;
      state.membre=true;
    },
  },
  actions: {
  },
  modules: {
  }
})
