<template>
  <div class="container mt-2">
    <table class="table table-striped table-hover table-bordered">
      <tbody>
        <tr>
          <td>New Requests</td>
          <td>{{ this.newreq }}</td>
        </tr>
        <tr>
          <td>Completed Requests</td>
          <td>{{ this.compreq }}</td>
        </tr>
        <tr>
          <td>Total Requests</td>
          <td>{{ this.ttlreq }}</td>
        </tr>
        <tr>
          <td>Total Articles</td>
          <td>{{ this.ttlart }}</td>
        </tr>
        <tr>
          <td>New Messages</td>
          <td>{{ this.newmsg }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import APIService from "../../APIService";

export default {
  data() {
    return { newreq: 0, compreq: 0, ttlart: 0, ttlreq: 0, newmsg: 0 };
  },
  async beforeCreate() {
    try {
      var resp = await APIService.checkLogin();
      if (resp.status != "loggedin") {
        this.$router.push({ name: "Admin Login" });
      }
    } catch (err) {
      this.$router.push({ name: "Admin Login" });
    }
  },
  async created() {
    try {
      var resp = await APIService.getMetaData();
      this.newreq = resp.newrequest;
      this.compreq = resp.completedrequest;
      this.ttlreq = this.compreq + this.newreq;
      this.ttlart = resp.totalarticles;
      this.newmsg = resp.newmessages;
    } catch (err) {
      console.error(err);
      console.error(err.message);
    }
  },
};
</script>

<style>
</style>