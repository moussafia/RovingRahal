import api from '../../api'
import router from '../../router'

let state = {
    user : {},
}
let mutations = {
    setUser(state,data){
        state.user = data;
    }
}
let actions = {
    async registerUser({ commit , dispatch }, user) {
            return api.post('auth/register',  {
                email : user.email,
                password : user.password,
                name : user.name,
                password_confirmation : user.password_confirmation,
            })
            .then((response)=>{
                console.log(response);
                localStorage.setItem('token', response.data.access_token);
                dispatch('me');
                return response
            }).catch((error)=>{
                console.log(error);
            })
    },
    async loginUser({ commit, dispatch }, user) {
        return api.post('auth/login', {
            email : user.email,
            password : user.password,
        }).then((response)=>{
            console.log(response);
            localStorage.setItem('token', response.data.access_token);
            dispatch('me')
            return response;
        }).catch((error)=>{
            console.log(error);
        })
    },
    async resetPasswordRequest({ commit }, user) {
        return api.post('password/reset-password',{
            email : user.email,
        })
        .then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        })
    },
    async resetPassword({ commit }, info) {
        return api.post('password/reset',{
            email : info.email,
            token : info.token,
            password : info.password,
            password_confirmation : info.password_confirmation,
        })
        .then((response)=>{
            console.log(response);
            return response
        }).catch((error)=>{
            console.log(error);
        })
    },
    async me({ commit }) {
        return api.get('auth/me')
        .then((response)=>{
            console.log(response);
            commit('setUser',response.data)
        }).catch((error)=>{
            console.log(error);
        })
    }
}
let getters = {

}

let store = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}

export default store;