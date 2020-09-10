import Vuex from 'vuex'
import Vue from 'vue'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

const index=new Vuex.Store({
  state:{
    userInfo:{},
    accessToken:''
  },
  mutations:{
    setUser(state,data){
      state.userInfo=data;
    },
    removeUser(state){
      state.userInfo={};
    }
  },
  plugins:[createPersistedState()]
})

export default index;

