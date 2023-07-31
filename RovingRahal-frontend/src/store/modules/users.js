import api from '../../api'
import router from '../../router'

let state = {
    user:{},
    users:[],
    login_info:{},
    register_info :{},
}
let mutations = {
    setRegisterInfo(state,data){
        state.register_info = data;
    },
    setLoginInfo(state,data){
        state.login_info = data;
    }
}
let actions = {
    async register({dispatch,commit}, formData){
        commit('setRegisterInfo',formData);
        await dispatch('storeNewRegister');
    },
    storeNewRegister({state}){
        api.post('/user',state.register_info)
        .then((response)=>{
            localStorage.setItem('token',response.data.access_token);
            router.push('/dashboard');
        }).catch((error)=>{
            console.log(error);
        })
    },
    async login({dispatch,commit},formData){
        commit('setLoginInfo',formData);
        await dispatch('submitLogin');
    },
    submitLogin({state}){
        api.post('/auth/login',state.login_info)
        .then((response)=>{
            localStorage.setItem('token',response.data.access_token);
            router.push('/dashboard');
        })
        .catch((error)=>{

        })
    }
}
let getters = {
    // getUser(state){
    //     return state.user
    // }    
    getUser: (state) => state.user,
    // both are correct
}

let store = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}

export default store;