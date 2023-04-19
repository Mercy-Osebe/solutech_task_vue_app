<template>
  <div>
    <div class="row">
      <div class="col-lg-12 margin-tb">
        <div>
          <h3>task index page</h3>
        </div>
        <div>
          <a class="btn btn-success" href=""> Create New Task</a>
        </div>
      </div>
    </div>

    <table class="table table-bordered">
      <tr>
        <th>No</th>
        <th>Name</th>
        <th width="280px">Action</th>
      </tr>
      <!-- loop through the tasks -->
      <tr>
        <td>1</td>
        <td>name</td>
        <td>         
          <router-link to="/showTask/id" class="btn btn-info">Show</router-link>
          <router-link to="/editTask/id/edit" class="btn btn-info">Edit</router-link>         
          <button class="btn btn-danger">Delete</button>
        </td>
      </tr>
    </table>
    <p class="text-center text-primary"><small>Solutech</small></p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a{
    margin: 5px;
}

</style>
