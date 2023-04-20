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

  <div class="container col-md-6">
    <form @submit.prevent="editTask()">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="form-group">
            <strong>Name:</strong>
            <input type="text" name="name" class="form-control" 
            v-model="task.name"/>
            <strong></strong>
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
            <strong></strong>
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

              <label class="form-check-label"> {{status.name}} </label>
            </div>
            <strong></strong>
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
            <strong></strong>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="form-group">
            <strong>Choose Due date:</strong>
            <input
              type="date"
              id="due_date"
              name="due_date"
              class="responsive-input"
              v-model="task.due_date"
            />

            <strong></strong>
          </div>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="col-xs-12 col-sm-12 col-md-12 text-center mt-3">
            <button class="btn btn-primary">
              Edit Task
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { useStatusStore } from '../../stores/status';
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
        remarks: "",
        due_date: "",
      },
      errors: [],
    };
  },
  created(){
    console.log(this.statusStore.getStatusData());
    this.getTask();
    console.log(this.statusStore.statuses)

  },
  methods: {
    async getTask() {
      let id = this.$route.params.id;
      await axiosAuthApi.get(`task/${id}`).then((res) => {
        console.log(res);
        this.task = res.data.task;
      });
    },
    async editTask() {
      let id = this.$route.params.id;
      await axiosAuthApi
        .put(`task/${id}/edit`,this.task)
        .then((res) => {
          confirm("are you sure you want to edit this item?");
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
