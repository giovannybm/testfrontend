import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    olympicWinners:[],
    authUser:null,
    users:[
      {username:'Administrador', passwd:'Administrador'},
      {username:'Coordinador', passwd:'Coordinador'}
    ]

  },
  mutations: {
    setOlympicWinners(state, data) {
      state.olympicWinners = data;
    },
    setAuthUser(state, data) {
      state.authUser = data;
    },
  },
  actions: {
    getOlympicWinners(context){
      axios.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json')
      .then((response)=>context.commit("setOlympicWinners", response.data))
    }
  },
  getters:{
    userValidation:(state)=>(input)=>{
      return state.users.find((element)=>{ if(element.username===input){return element}})     
    }, 

  },
  modules: {}
})
