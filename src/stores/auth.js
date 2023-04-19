import { defineStore } from "pinia";
import { axiosApi } from "../utilities/axiosConf";
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
    async registerUser() {
      await axiosApi
        .post("/register", this.user)
        .then((res) => {
          console.log(res);
          this.user = res.data.user;
          this.token = res.data.token;
          alert(res.data.message);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {

            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    },
    async loginUser() {
        await axiosApi
        .post("/login", this.user)
        .then((res) => {
          console.log(res);
          this.user = res.data.user;
          this.token = res.data.token;
          alert(res.data.message);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {

            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
        
    },
  },
});
