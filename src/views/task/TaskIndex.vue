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
          <a class="btn btn-info" href="">Show</a>

          <a class="btn btn-primary" href="">Edit</a>

          <a class="btn btn-danger" href="">Delete</a>
        </td>
      </tr>
    </table>
    <p class="text-center text-primary"><small>Tindar Farm</small></p>
  </div>
</template>

<script>
export default {};
</script>

<style>
a{
    margin: 5px;
}

</style>
