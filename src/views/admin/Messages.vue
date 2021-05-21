<template>
  <div class="container mt-3">
    <div class="table-responsive">
      <table class="table table-hover table-striped table-bordered">
        <colgroup>
          <col span="1" style="width: 10%" />
          <col span="1" style="width: 65%" />
          <col span="1" style="width: 15%" />
          <col span="1" style="width: 10%" />
        </colgroup>
        <thead class="table-dark">
          <tr>
            <th>#</th>
            <th>from</th>
            <th>subject</th>
            <th>date</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(msg, index) in msgs" :key="msg.id">
            <td>{{ index + 1 }}</td>
            <td>{{ msg.name }}</td>
            <td>{{ msg.subject }}</td>
            <td>{{ this.formatDate(msg.createdAt) }}</td>
            <td>
              <div
                class="btn-group mx-auto"
                role="group"
                aria-label="action btns"
              >
                <button
                  type="button"
                  class="btn btn-primary me-2"
                  @click="openMsg(msg)"
                >
                  <i class="fas fa-eye"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-danger ms-2"
                  @click="delMsg(msg)"
                >
                  <i class="fas fa-minus-circle"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="msgModal"
    tabindex="-1"
    aria-labelledby="msgModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-scrollable modal-lg modal-fullscreen-md-down"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="msgModalLabel">Message</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <table>
            <tr>
              <th>From</th>
              <td>: {{ this.modalmsg.name }}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>: {{ this.modalmsg.phone }}</td>
            </tr>
            <tr>
              <th>Subject</th>
              <td>: {{ this.modalmsg.sub }}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>: {{ this.modalmsg.date }}</td>
            </tr>
            <tr>
              <th>Message</th>
              <td>: {{ this.modalmsg.message }}</td>
            </tr>
          </table>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Mark Read</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import APIService from "../../APIService";

export default {
  data() {
    return {
      modalmsg: {
        sub: "",
        phone: "",
        date: "",
        message: "",
      },
      msgs: [],
    };
  },
  methods: {
    openMsg(msg) {
      var msgModal = new bootstrap.Modal(
        document.getElementById("msgModal"),
        {}
      );
      this.modalmsg.name = msg.name;
      this.modalmsg.sub = msg.subject;
      this.modalmsg.phone = msg.phone;
      this.modalmsg.date = this.formatDate(msg.createdAt);
      this.modalmsg.message = msg.message;
      msgModal.show();
    },
    async delMsg(msg) {
      if(!confirm("Are you sure you want to delete this message!")) {
        return null;
      }
      try {
        msg = await APIService.deleteMessage(msg._id);
        alert("Message deleted!");
        this.msgs.filter((m) => m._id !== msg._id);
      } catch (err) {
        console.error(err);
        console.error(err.message);
      }
    },
    formatDate(date) {
      var realdate = new Date(date);
      // console.log(realdate);
      var formattedDate = "";
      formattedDate += realdate.getDay() + "/";
      formattedDate += realdate.getMonth() + "/";
      formattedDate += realdate.getFullYear();
      return formattedDate;
    },
  },
  async created() {
    try {
      this.msgs = await APIService.getMessages();
      console.log(this.msgs);
    } catch (err) {
      console.error(err);
      console.error(err.message);
    }
  },
};
</script>

<style>
</style>