<template>
  <div class="container col-md-6">
    <form @submit.prevent="addTask()">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="form-group">
            <strong>Name:</strong>
            <input
              type="text"
              name="name"
              class="form-control"
              v-model="task.name"
            />
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="form-group">
            <strong>Description:</strong>
            <textarea
              name="description"
              id="description"
              cols="38"
              rows="6"
              v-model="task.description"
            ></textarea>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="form-group">
            <strong>Set Status:</strong>
            <div
              class="form-check"
              v-for="status in statusStore.statuses"
              :key="status.id"
            >
              <input
                class="form-check-input"
                type="radio"
                name="status"
                :id="status.id"
                v-model="task.status_id"
                :value="status.id"
              />
              <label class="form-check-label" :for="status.id">
                {{ status.name }}
              </label>
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="col-xs-12 col-sm-12 col-md-12 text-center mt-3">
            <button class="btn btn-primary">Add Task</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { useStatusStore } from "../../stores/status";
import { axiosAuthApi } from "../../utilities/axiosConf";
export default {
  setup() {
    let statusStore = useStatusStore();
    return {
      statusStore,
    };
  },
  data() {
    return {
      task: {
        name: "",
        description: "",
        status_id: "",
      },
    };
  },
  created() {
    console.log("hello");
    console.log(this.statusStore.getStatusData());
  },
  methods: {
    async addTask() {
      await axiosAuthApi
        .post("task/create", this.task)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        })
    },
  },
};
</script>

<style></style>
