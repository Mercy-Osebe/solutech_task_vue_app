<template>
  <div>
    <header-view-component></header-view-component>
    
    <router-view></router-view>
  </div>
  
</template>

<script>
import HeaderViewComponent from './components/HeaderViewComponent.vue'
import { useAuthUser } from './stores/auth'

export default {
  components: {HeaderViewComponent },
  setup(){
    let userStore=useAuthUser();
    return {
      userStore
    }
  },
  provide() {
    return {
      userStore:this.userStore
    }
  }

}
</script>

<style>

</style>
