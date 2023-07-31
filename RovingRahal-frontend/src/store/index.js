import { createStore } from "vuex";
//just an example
import users from './modules/users.js'

let modules = {
    users,
};

export default createStore({
    modules
})