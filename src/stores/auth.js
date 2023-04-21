import { defineStore } from "pinia";
import { axiosAuthApi } from "../utilities/axiosConf";
import { saveLocalStorageWithKey } from "../utilities/useLocalStorage";

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

  getters: {
    getUser(state){
      return state.user;
    },
    getToken(state){
      return state.token;
    }
  },
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
        saveLocalStorageWithKey('user-token', undefined)
        saveLocalStorageWithKey('user-details', undefined)
        alert(res.data.message);
        
      });
    },
  },
});
