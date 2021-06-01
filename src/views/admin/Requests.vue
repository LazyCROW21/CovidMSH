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
        <div class="table-responsive">
          <table class="table table-hover table-striped table-bordered">
            <thead class="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Person</th>
                <th>Requirements</th>
                <th class="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(request, index) in requests.filter(
                  (reqst) => reqst.completed === false
                )"
                :key="request._id"
              >
                <td>{{ index + 1 }}</td>
                <td>{{ request.requesterName }}</td>
                <td>{{ request.requesterPhone }}</td>
                <td>{{ request.personCount }}</td>
                <td>
                  <span v-for="people in request.people" :key="people.id">
                    {{ people.requirement }},
                  </span>
                </td>
                <td class="text-center">
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="action btns"
                  >
                    <button @click="viewRequest(request)" type="button" class="btn btn-sm btn-primary me-2">
                      <i class="fas fa-eye"></i>
                    </button>
                    <button @click="deleteRequest(request._id)" type="button" class="btn btn-sm btn-danger ms-2">
                      <i class="fas fa-minus-circle"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="nav-completed-req"
        role="tabpanel"
        aria-labelledby="nav-completed-req-tab"
      >
        <div class="table-responsive">
          <table class="table table-hover table-striped table-bordered">
            <thead class="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Person</th>
                <th>Requirements</th>
                <th class="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(request, index) in requests.filter(
                  (reqst) => reqst.completed === true
                )"
                :key="request._id"
              >
                <td>{{ index + 1 }}</td>
                <td>{{ request.requesterName }}</td>
                <td>{{ request.requesterPhone }}</td>
                <td>{{ request.personCount }}</td>
                <td>
                  <span v-for="people in request.people" :key="people.id">
                    {{ people.requirement }},
                  </span>
                </td>
                <td class="text-center">
                  <div class="btn-group" role="group" aria-label="action btns">
                    <button
                      type="button"
                      @click="viewRequest(request)"
                      class="btn btn-sm btn-primary me-2"
                    >
                      <i class="fas fa-eye"></i>
                    </button>
                    <button @click="deleteRequest(request._id)" type="button" class="btn btn-sm btn-danger ms-2">
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
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="requestModal"
    tabindex="-1"
    aria-labelledby="requestModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg modal-fullscreen-md-down"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" type="text" id="requestModalLabel">
            Request
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-12 col-md-6 fw-bold">Request date</div>
            <div class="col-12 col-md-6">{{ this.formatDate(this.requestModal.createdAt) }}</div>
            <div class="col-12 col-md-6 fw-bold">Requester's name</div>
            <div class="col-12 col-md-6">{{ this.requestModal.requesterName }}</div>
            <div class="col-12 col-md-6 fw-bold">Requester's phone</div>
            <div class="col-12 col-md-6">{{ this.requestModal.requesterPhone }}</div>
            <div class="col-12 col-md-6 fw-bold">Requester's email</div>
            <div class="col-12 col-md-6">{{ this.requestModal.requesterEmail }}</div>
            <div class="col-12 col-md-6 fw-bold">Requester's pincode</div>
            <div class="col-12 col-md-6">{{ this.requestModal.requesterPINCODE }}</div>
            <div class="col-12 col-md-6 fw-bold">Requester's Address</div>
            <div class="col-12 col-md-6">{{ this.requestModal.requesterAddress }}</div>
            <div class="col-12 col-md-6 fw-bold">Other Information</div>
            <div class="col-12 col-md-6">{{ this.requestModal.requesterAdditionalInfo }}</div>
            <div class="col-12 bg-info rounded">
              <h6 class="text-white mt-2 mb-0">People List</h6>
              <hr class="text-white my-1" />
              <Person
                @removerPerson="0"
                :delbtn="false"
                v-for="person in this.requestModal.people"
                :key="person.id"
                :person="person"
              />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
          v-if="this.requestModal.completed"
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button v-else type="button" class="btn btn-success" @click="markComplete">Mark Completed</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import APIService from "../../APIService";
import Person from "@/components/Person.vue";

export default {
  data() {
    return {
      requestModal: {
        _id: "",
        requesterName: "",
        requesterPhone: "",
        requesterEmail: "",
        requesterPINCODE: "",
        requesterAddress: "",
        requesterAdditionalInfo: "",
        personCount: 1,
        people: [],
        createdAt: "",
        completed: false,
      },
      requests: [],
    };
  },
  methods: {
    viewRequest(request) {
      var requestModal = new bootstrap.Modal(
        document.getElementById("requestModal"),
        {}
      );
      this.requestModal._id = request._id;
      this.requestModal.requesterName = request.requesterName;
      this.requestModal.requesterPhone = request.requesterPhone;
      this.requestModal.requesterEmail = request.requesterEmail;
      this.requestModal.requesterPINCODE = request.requesterPINCODE;
      this.requestModal.requesterAddress = request.requesterAddress;
      this.requestModal.requesterAdditionalInfo = request.requesterAdditionalInfo;
      this.requestModal.personCount = request.personCount;
      this.requestModal.createdAt = request.createdAt;
      this.requestModal.completed = request.completed;
      this.requestModal.people = request.people;
      if (request.completed) {
        document.getElementById("requestModalLabel").innerText =
          "Completed Request";
      } else {
        document.getElementById("requestModalLabel").innerText = "New Request";
      }
      requestModal.show();
    },
    async markComplete() {
      var resp = await APIService.markComplete(this.requestModal._id);
      alert("Requested marked Completed!");
      this.requests = this.requests.map((ele) => {
        if(ele._id == this.requestModal._id) {
          ele.completed = true;
          return ele;
        } else {
          return ele;
        }
      });
    },
    async deleteRequest(id) {
      if(!confirm("Are you sure you want to delete this request?")) {
        return false;
      }
      var resp = await APIService.deleteRequest(id);
      alert("Requested removed!");
      this.requests = this.requests.filter((ele) => ele._id !== id);
    },
    formatDate(date) {
      var realdate = new Date(date);
      var formattedDate = "";
      formattedDate += realdate.getDay() + "/";
      formattedDate += realdate.getMonth() + "/";
      formattedDate += realdate.getFullYear();
      return formattedDate;
    },
  },
  async created() {
    try {
      this.requests = await APIService.getRequests();
    } catch (err) {
      console.error(err);
      console.error(err.message);
    }
  },
  components: {
    Person
  },
};
</script>

<style>
</style>