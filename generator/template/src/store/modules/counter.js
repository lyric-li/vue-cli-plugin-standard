import {
  getDemo,
} from "@/api/counter";

const state = {
  num: 0,
};

const actions = {
  // do something async
  someAsyncTask({ commit }) {
    getDemo({
      a: 1,
    }).finally(() => {
      commit("INCREMENT_NUM_COUNTER");
    });
  },
};

const mutations = {
  DECREMENT_NUM_COUNTER(state) {
    state.num -= 1;
  },
  INCREMENT_NUM_COUNTER(state) {
    state.num += 1;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
