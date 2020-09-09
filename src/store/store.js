import Vuex from 'vuex'
import Vue from 'vue'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

const store=new Vuex.Store({
  state:{
    userInfo:{},
  },
  mutations:{
    setUser(state,data){
      state.userInfo=data;
    }
  },
  plugins:[createPersistedState()]
})

export default store;

