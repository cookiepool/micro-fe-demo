import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    testVar: 2000
  },
  mutations: {
    modifiy(state, payload) {
      state.testVar = payload;
    }
  },
  actions: {},
  modules: {}
});
