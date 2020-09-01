import { SET_AUTHOR, SET_TOKEN } from "./mutation-type";

export default {
  [SET_AUTHOR](state, payload) {
    state.author = payload;
  },
  [SET_TOKEN](state, payload) {
    state.token = payload;
  }
};
