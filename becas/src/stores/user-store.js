import { defineStore } from "pinia";
export const useUserStore = defineStore('userStore', {
  state: () => ({
    user: null,
  }),
  getters: {
    getUser(state) {
      return state.user
    }
  },
  actions: {
    setUser(user) {
      this.user = user;
    },

    userLogout(){
      this.user = null;
    }
  },

})
