<template>
  <div>
    <div class="row">
      <div class="col-lg-12 margin-tb">
        <div>
          <h3>task index page</h3>
        </div>
        <div>
          <router-link to="/createTask" class="btn btn-success"
            >Create New Task</router-link
          >
        </div>
      </div>
    </div>

    <table class="table table-bordered" v-if="taskStore.tasks.length > 0">
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Description</th>
        <th>Status</th>
        <th>Due date</th>
        <th width="280px">Action</th>
      </tr>
      <!-- loop through the tasks -->
      <tr v-for="task in taskStore.tasks" :key="task.id">
        <td>{{ task.id }}</td>
        <td>{{ task.name }}</td>
        <td>{{ task.description }}</td>
        <td>{{ task.status_id }}</td>
        <td>{{ task.due_date }}</td>
        <td>
          <router-link :to="`/showTask/${task.id}`" class="btn btn-info"
            >Show</router-link
          >
          <router-link :to="`/editTask/${task.id}/edit`" class="btn btn-info"
            >Edit</router-link
          >
          <button
            class="btn text-danger"
            @click="taskStore.deleteTask(task.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </table>
    <h1 class="text-danger" v-else>Tasks loading...</h1>
    <p class="text-center text-primary"><small>Solutech</small></p>
  </div>
</template>

<script>
import { useTaskStore } from "../../stores/task";
export default {
  inject: ["userStore"],
  setup() {
    let taskStore = useTaskStore();
    return {
      taskStore,
    };
  },
  created() {
    this.taskStore.getTasks();
  },
  methods: {},
};
</script>

<style scoped>
a {
  margin: 5px;
}
</style>
