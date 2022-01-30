
import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            userName: ''
        }
    },
    mutations: {
        setUserName(state,userName) {
            state.userName = userName
        },
    }
})
export default store