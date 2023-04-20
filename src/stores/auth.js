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
      let taskStore = useTaskStore();
      await axiosApi
        .post("/login", this.user)
        .then((res) => {
          console.log(res);
          this.user = res.data.user;
          this.token = res.data.token;
          alert(res.data.message);
          // calling the rask crore immediately after login
          taskStore.getTasks();
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
    async logout() {
      await axiosAuthApi.post("logout").then((res) => {
        this.token = "";
        alert(res.data.message);
        
      });
    },
  },
});
