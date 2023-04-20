<template>
  <div class="container col-md-6">
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
            <input type="email" name="email" class="form-control" 
            v-model="user.email"/>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="form-group">
            <strong>Password:</strong>
            <input type="password" name="password" class="form-control"
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

export default {
  setup() {
    let userStore=useAuthUser();
    return{
      userStore
    };
  },
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: null,
        password_confirmation: null,
      },
    };
  },
  methods: {
    register(){
      this.userStore.user=this.user;
      this.userStore.registerUser();
      this.$router.replace('/taskIndex');


    }
  },
};
</script>

<style></style>
