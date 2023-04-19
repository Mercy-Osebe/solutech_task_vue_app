<template>
  <div>
    <header-view-component></header-view-component>
    
    <router-view></router-view>
  </div>
  
</template>

<script>
import HeaderViewComponent from './components/HeaderViewComponent.vue'

export default {
  components: {HeaderViewComponent },

}
</script>

<style>

</style>
