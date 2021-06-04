<template>
  <div class="container mt-4">
    <div class="mx-auto loginform">
      <h1 class="text-center">Login to Admin Panel</h1>
      <hr />
      <form @submit="loginAdmin" class="p-2 border rounded">
        <div class="form-floating mb-3">
          <input
            type="text"
            v-model="username"
            class="form-control"
            id="loginusername"
            placeholder="example"
          />
          <label for="loginusername">Username</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            v-model="password"
            class="form-control"
            id="loginpassword"
            placeholder="Password"
          />
          <label for="loginpassword">Password</label>
        </div>
        <p class="text-center text-danger mt-2" v-if="invalid">
          Invalid username/password
        </p>
        <div class="mt-3 text-center">
          <button class="btn btn-primary w-50">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import APIService from "../../APIService";

export default {
  data() {
    return {
      username: "",
      password: "",
      invalid: false,
    };
  },
  methods: {
    async loginAdmin(e) {
      e.preventDefault();
      console.log(this.username, this.password);
      var result = await APIService.login(this.username, this.password);
      console.log(result);
      if (result.login == "success") {
        this.$router.push({ name: "Admin Dashboard" });
      } else {
        this.invalid = true;
      }
    },
  },
  created() {},
};
</script>

<style>
.loginform {
  max-width: 480px;
}
</style>