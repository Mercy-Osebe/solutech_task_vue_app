<template>
    <div class="row">
      <div class="col-lg-12 margin-tb">
        <div class="pull-left">
          <h2>Edit Task</h2>
        </div>
        <div class="pull-right">
          <a class="btn btn-primary" href=""> Back</a>
        </div>
      </div>
    </div>
  
    <div class="alert alert-danger">
      <strong>Whoops!</strong> There were some problems with your input.<br /><br />
      <ul>
        <li>task</li>
      </ul>
    </div>
    <form action="">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="form-group">
            <strong>Name:</strong>
            <input type="text" name="" id="" />
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="form-group">
            <strong>Status:</strong>
            <br />
            <!-- loop through status values -->
            <label> status </label>
            <br />
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 text-center">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style></style>
  