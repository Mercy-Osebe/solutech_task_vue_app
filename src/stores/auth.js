import { defineStore } from "pinia";
export const useAuthUser = defineStore("auth", {
  state: () => {
    return {
      user: {
        name: "",
        email: "",
        password: null,
      },
      token: "",
    };
  },
  getters: {},
  actions: {
    


  },
});
