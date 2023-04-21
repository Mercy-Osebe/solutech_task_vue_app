<template>

  <div class="container col-md-6">

    <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>


    <form @submit.prevent="register()">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="form-group">
            <strong>Name:</strong>
            <input type="text" name="name" class="form-control" 
            v-model="user.name"/>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="form-group">
            <strong>Email:</strong>
            <input type="email" name="email" class="form-control" autocomplete="email"
            v-model="user.email"/>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="form-group">
            <strong>Password:</strong>
            <input type="password" name="password" class="form-control" autocomplete="new-password"
            v-model="user.password" />
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="form-group">
            <strong>Confirm Password:</strong>
            <input
              type="password"
              name="password_confirmation"
              class="form-control"
              v-model="user.password_confirmation"
              autocomplete="new-password"
            />
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="col-xs-12 col-sm-12 col-md-12 text-center mt-3">
            <button class="btn btn-primary">Register</button>
            <router-link to="/login">Login</router-link>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { useAuthUser } from '../../stores/auth';
import { axiosApi, getErrorMessageFromList } from '../../utilities/axiosConf';

export default {

  data() {
    return {
      user: {
        name: "",
        email: "",
        password: null,
        password_confirmation: null,
      },
      errors: []
    };
  },
  methods: {
    register(){
      this.registerUser()
    },
    registerUser() {
      this.errors = [];
      axiosApi
        .post("/register", this.user)
        .then((res) => {
          console.log(res);
          this.user = res.data.user;
          this.token = res.data.token;
          let userStore = useAuthUser();
          userStore.updateToken(res.data.token)
          console.log("Saved token ", userStore.token)
          /** sample token => 2|c5JxFSRzwHlTY3y2R0KYxiPivpD4VCuP9RKhJCfV */
          alert(res.data.message);
          this.$router.replace('/taskIndex');
        })
        .catch((error) => {
          const response = error.response;
          if (response.status == 422) {
            const errorsList = [];

            Object.keys(response.data.errors).forEach(item => {
              errorsList.push(getErrorMessageFromList(response.data.errors[item]));
            });
            
            this.errors = errorsList;
          }
        });
    }
  },
};
</script>

<style></style>
