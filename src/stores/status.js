import { defineStore } from "pinia";
import { axiosAuthApi } from "../utilities/axiosConf";

export const useStatusStore = defineStore("status", {
  state: () => {
    return {
      statuses: [],
    };
  },
  getters: {},
  actions: {
    async getStatusData() {
      await axiosAuthApi.get("/statuses").then((res) => {
        console.log(res);
        this.statuses=res.data.statuses;
      }).catch(error=>{
        console.log(error)
      })
      ;
    },
  },
});
