import { defineStore } from "pinia";
import { axiosAuthApi } from "../utilities/axiosConf";

export const useTaskStore = defineStore("task", {
  state: () => {
    return {
      tasks: [],
    };
  },
  getters: {},
  actions: {
    async getTasks() {
      await axiosAuthApi
        .get("tasks")
        .then((res) => {
          console.log(res);
          this.tasks = res.data.tasks;
        //   console.log(this.tasks);
        })
        .catch(console.error());
    },
  },
});
