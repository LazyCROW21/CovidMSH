<template>
  <div class="container mt-3">
    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <button
          class="nav-link active"
          id="nav-new-req-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-new-req"
          type="button"
          role="tab"
          aria-controls="nav-new-req"
          aria-selected="true"
        >
          New requests
        </button>
        <button
          class="nav-link"
          id="nav-completed-req-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-completed-req"
          type="button"
          role="tab"
          aria-controls="nav-completed-req"
          aria-selected="false"
        >
          Completed requests
        </button>
      </div>
    </nav>
    <div class="tab-content p-2" id="nav-tabContent">
      <div
        class="tab-pane fade show active"
        id="nav-new-req"
        role="tabpanel"
        aria-labelledby="nav-new-req-tab"
      >
        <table class="table table-hover table-striped table-bordered">
          <thead class="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Person</th>
              <th>Requirements</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="request in requests" :key="request._id">
              <td>{{ msg.id }}</td>
              <td>{{ msg.subject }}</td>
              <td>{{ msg.date }}</td>
              <td>
                <div class="btn-group" role="group" aria-label="action btns">
                  <button type="button" class="btn btn-primary me-2">
                    <i class="fas fa-eye"></i>
                  </button>
                  <button type="button" class="btn btn-danger ms-2">
                    <i class="fas fa-minus-circle"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="tab-pane fade"
        id="nav-completed-req"
        role="tabpanel"
        aria-labelledby="nav-completed-req-tab"
      >
        <table class="table table-hover table-striped table-bordered">
          <thead class="table-dark">
            <tr>
              <th>#</th>
              <th>subject</th>
              <th>date</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="msg in msgs" :key="msg.id">
              <td>{{ msg.id }}</td>
              <td>{{ msg.subject }}</td>
              <td>{{ msg.date }}</td>
              <td>
                <div class="btn-group" role="group" aria-label="action btns">
                  <button type="button" class="btn btn-primary me-2">
                    <i class="fas fa-eye"></i>
                  </button>
                  <button type="button" class="btn btn-danger ms-2">
                    <i class="fas fa-minus-circle"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import APIService from "../../APIService";
export default {
  data() {
    return {
      requests: [],
    };
  },
  async created() {
    try {
      this.requests = await APIService.getRequests();
      console.log(this.requests);
    } catch (err) {
      console.error(err);
      console.error(err.message);
    }
  },
};
</script>

<style>
</style>