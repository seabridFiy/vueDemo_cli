import { SET_AUTHOR } from './mutation-type'
export default {
    [SET_AUTHOR](state, payload){
        state.author = payload
    }   
}