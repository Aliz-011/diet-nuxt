import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      darkTheme: false,
    };
  },
  getters: {},
  actions: {
    changeTheme() {
      this.darkTheme = !this.darkTheme;
    },
  },
});
