import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const actions = {
  addEven(context, value) {
    if (value % 2 == 0) {
      context.commit("ADD", value);
    }
  },
  addWait(context, value) {
    setTimeout(() => {
        context.commit("ADD", value);
    }, 1000);
  },
};

const mutations = {
  ADD(state, value) {
    state.sum += value;
  },
  JIAN(state, value) {
    state.sum -= value;
  },
};

const state = {
  sum: 0,
};

export default new Vuex.Store({
  actions,
  mutations,
  state,
});
