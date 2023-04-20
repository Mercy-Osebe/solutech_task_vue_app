import { defineStore } from "pinia";
import { axiosAuthApi } from "../utilities/axiosConf";
import { useStatusStore } from "./status";

export const useTaskStore = defineStore("task", {
  state: () => {
    return {
      tasks: [],
      statuses:[],
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
    async deleteTask(id) {
        await axiosAuthApi
          .delete(`task/${id}`)
          .then((res) => {
            confirm('are you sure you want to delete this item?')
            console.log(res);
            this.tasks = res.data.tasks;
          })
          .catch((error) => {
            console.log(error);
          });
      },
  },
});
