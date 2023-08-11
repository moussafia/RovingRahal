import { createStore } from "vuex";
//just an example
import users from "./modules/users.js";

let modules = {
    users,
};

export default createStore({
    modules,
    state: {
        darkMode: false,
    },
    mutations: {
        toggleDarkMode(state) {
            state.darkMode = !state.darkMode;
        },
    },
    actions: {
        toggleDarkMode({ commit }) {
            commit("toggleDarkMode");
        },
    },
    getters: {
        isDarkMode(state) {
            return state.darkMode;
        },
    },
});
