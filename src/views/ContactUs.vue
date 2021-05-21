<template>
  <div class="container">
    <div class="row mt-4 shadow rounded">
      <div class="col-12 col-md-6 bg-light text-dark">
        <h2 class="text-center p-3">Contact us</h2>
        <div class="mb-3">
          <h4>Address</h4>
          <address>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            doloribus rerum perspiciatis odio eaque cupiditate!
          </address>
        </div>
        <div class="mb-3">
          <h4>Phone</h4>
          <a href="tel:123-456-7890">123-456-7890</a>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <h2 class="text-center p-3">Send us a message</h2>
        <form @submit="submitMsg">
          <input
            class="form-control my-2"
            type="text"
            placeholder="Name"
            v-model="this.contactmsg.name"
          />
          <input
            class="form-control my-2"
            type="text"
            placeholder="Phone"
            maxlength="10"
            v-model="this.contactmsg.phone"
          />
          <input
            class="form-control"
            type="text"
            placeholder="Subject"
            maxlength="150"
            v-model="this.contactmsg.subject"
          />
          <textarea
            class="form-control my-2"
            rows="4"
            placeholder="Message"
            maxlength="700"
            v-model="this.contactmsg.message"
          ></textarea>
          <div class="d-grid gap-2 col-6 mx-auto mb-3">
            <button class="btn btn-primary" type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import APIService from "../APIService";

export default {
  name: "ContactUs",
  data() {
    return {
      contactmsg: {
        name: "",
        phone: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    async submitMsg(e) {
      e.preventDefault();
      try {
        // console.log(this.contactmsg);
        var resp = await APIService.addMessage(this.contactmsg);
        console.log(resp);
        alert("Message sent!");
        this.contactmsg = {
          name: "",
          phone: "",
          subject: "",
          message: "",
        };
      } catch (err) {
        console.error(err);
        console.error(err.message);
      }
    },
  },
};
</script>

<style>
</style>