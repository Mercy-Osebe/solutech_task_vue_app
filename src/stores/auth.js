import { defineStore } from "pinia";
import { axiosApi, axiosAuthApi } from "../utilities/axiosConf";
import { useTaskStore } from "./task";
export const useAuthUser = defineStore("auth", {
  state: () => {
    return {
      user: {
        name: "",
        email: "",
        password: null,
      },
      token: "",
      loggedInUserDetails: {}
    };
  },
  getters: {},

  actions: {
    updateToken(token) {
      this.token = token
    },
    updateUserDetails(user) 
    {
      this.loggedInUserDetails = user;
    },
    async logout() {
      await axiosAuthApi.post("logout").then((res) => {
        this.token = "";
        alert(res.data.message);
        
      });
    },
  },
});
