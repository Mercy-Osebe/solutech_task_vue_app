<template>
  <div>
    <!-- Topbar Start -->
    <div class="container-fluid px-5 d-none d-lg-block">
      <div class="row gx-5 py-3 align-items-center">
        <div class="col-lg-3">
          <div class="d-flex align-items-center justify-content-start">
            <i class="bi bi-phone-vibrate fs-1 text-primary me-2"></i>
            <h2 class="mb-0">logo</h2>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="d-flex align-items-center justify-content-center">
            <a href="index.html" class="navbar-brand ms-lg-5">
              <h1 class="m-0 display-4 text-primary">
                <span class="text-secondary">Solutech</span>Task App
              </h1>
            </a>
          </div>
        </div>
        <div class="col-lg-3" v-if="userStore.token">
          <h3>Welcome:{{ userStore.user.name }}</h3>
        </div>
      </div>
    </div>
    <!-- Topbar End -->

    <!-- Navbar Start -->
    <nav
      class="navbar navbar-expand-lg text-bg-secondary p-3 navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5"
    >
      <a href="index.html" class="navbar-brand d-flex d-lg-none">
        <h1 class="m-0 display-4 text-primary">
          <span class="text-secondary">Solutech</span>Task App
        </h1>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav mx-auto py-0">
          <router-link class="nav-item nav-link" to="/">Home</router-link>
          <router-link class="nav-item nav-link" to="/taskIndex" v-if="userStore.token">View Tasks</router-link>
          <button class="nav-item nav-link" v-if="userStore.token">Logout</button>
          <router-link class="nav-item nav-link" to="/login" v-if="!userStore.token">Login</router-link>
          <router-link class="nav-item nav-link" to="/register" v-if="!userStore.token">Register</router-link>
         
        </div>
      </div>
    </nav>
    <!-- Navbar End -->
  </div>
</template>

<script>
import { useAuthUser } from '../stores/auth';
export default {
  setup(){
    let userStore=useAuthUser();
    return{
      userStore
    };
  }
};
</script>

<style></style>
