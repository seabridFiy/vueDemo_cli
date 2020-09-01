import { SETDEMOMODULE } from "./demo_mutations-type";
const state = {
  demoModule: ""
};

const mutations = {
  [SETDEMOMODULE](state, paloay) {
    state.demoModule = paloay;
  }
};

const actions = {};

const getters = {};

export default {
  state,
  actions,
  getters,
  mutations
};
