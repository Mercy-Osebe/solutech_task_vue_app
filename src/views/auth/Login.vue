<template>
  <div class="container col-md-6">
    <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
  </p>
    <form @submit.prevent="login()">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="form-group">
            <strong>Email:</strong>
            <input type="email" name="email" class="form-control" autocomplete="email" data-cy="username"
            v-model="user.email"/>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="form-group">
            <strong>Password:</strong>
            <input type="password" name="password" class="form-control" autocomplete="current-password" data-cy="password"
            v-model="user.password"/>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="col-xs-12 col-sm-12 col-md-12 text-center mt-3">
            <button class="btn btn-primary" data-cy="loginButton">Login</button>
            <router-link to="/register">Register instead</router-link>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { useAuthUser } from '../../stores/auth';
import { axiosApi, getErrorMessageFromList } from '../../utilities/axiosConf';
import { saveLocalStorageWithKey } from '../../utilities/useLocalStorage';

export default {
  data() {
    return {
      user: {
        email: "",
        password: null,
      },
      errors: []
    };
  },
  methods: {
    login(){
      this.loginUser();
    },

    async loginUser() {
      this.errors = [];
      await axiosApi
        .post("/login", this.user)
        .then((res) => {
          console.log(res)
          this.user = res.data.user;
          let userStore = useAuthUser();
          userStore.updateToken(res.data.token)
          userStore.updateUserDetails(res.data.user)

          saveLocalStorageWithKey('user-token', res.data.token)
          saveLocalStorageWithKey('user-details', res.data.user)
          this.$router.replace('/taskIndex');
          // calling the rask crore immediately after login
          // taskStore.getTasks();
        })
        .catch((error) => {
          console.log(error)
          const response = error.response;

          if (response.status == 422) {
            const errorsList = [];

            Object.keys(response.data.errors).forEach(item => {
              errorsList.push(getErrorMessageFromList(response.data.errors[item]));
            });
            
            this.errors = errorsList;
          } else if( response.status == 401)
          {
            this.errors = response.data.message;
          }

        });
    }
  },
};
</script>

<style></style>
