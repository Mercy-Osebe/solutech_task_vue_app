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
            <strong>{{ errors.name }}</strong>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="form-group">
            <strong>Description:</strong>
            <textarea
              class="form-control"
              name="description"
              id="description"
              rows="6"
              v-model="task.description"
            ></textarea>
            <strong>{{ errors.description }}</strong>
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
            <strong>{{ errors.status_id }}</strong>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="form-group">
            <strong>Remarks:</strong>
            <textarea
              class="form-control"
              name="remarks"
              id="remarks"
              rows="6"
              v-model="task.remarks"
            ></textarea>
            <strong>{{ errors.remarks }}</strong>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="form-group">
            <strong>Choose Due date:</strong>
            <input
              type="date"
              id="due_date"
              name="due_date"
              v-model="task.due_date"
              class="responsive-input"
            />

            <strong>{{ errors.due_date }}</strong>
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
  inject:['userStore'],
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
        remarks: "",
        due_date:"",
      },
      errors: [],
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
          this.$router.replace("/taskIndex");
        })
        .catch((error) => {
          console.log(error);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<style scoped>
.responsive-input {
  width: 100%;
  max-width: 400px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

@media (min-width: 768px) {
  .responsive-input {
    width: auto;
    max-width: none;
  }
}

</style>
