import { createApp } from 'vue'
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      formData: null,
    };
  },
  mutations: {
    setFormData(state, formData) {
      state.formData = formData;
    },
  },
  actions: {
    saveFormData({ commit }, formData) {
      commit('setFormData', formData);
    },
  },
});

export default store;
