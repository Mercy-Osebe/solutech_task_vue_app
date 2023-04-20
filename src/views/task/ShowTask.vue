<template>
  <div class="row">
    <div class="col-lg-12 margin-tb">
      <div class="pull-left">
        <h2>Edit Task</h2>
      </div>
      <div class="pull-right">
        <router-link to="/taskIndex" class="btn btn-primary">Back</router-link>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header"><b>Task name:</b>{{ task.name }}</div>
    <div class="card-body">
      <h5 class="card-title">Description</h5>
      <p class="card-text">
        {{ task.description }}
      </p>
      <h3 class="card-title">Remarks</h3>
      <p class="card-text">
        {{ taskData.remarks }}
      </p>
      <router-link :to="`/editTask/${task.id}/edit`" class="btn btn-info"
        >Edit</router-link
      >
    </div>
  </div>
</template>

<script>
import { axiosAuthApi } from "../../utilities/axiosConf";
export default {
  data() {
    return {
      task: {
        name: "",
        description: "",
        status_id: "",
        due_date: "",
      },
      taskData: {
        remarks: "",
      },
    };
  },
  created() {
    this.getTask();
  },

  methods: {
    async getTask() {
      let id = this.$route.params.id;
      await axiosAuthApi.get(`task/${id}`).then((res) => {
        console.log(res);
        this.task = res.data.task;
        this.taskData = res.data.userTask;
      });
    },
  },
};
</script>

<style></style>
