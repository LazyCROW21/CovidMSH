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
        <form>
          <input class="form-control my-2" type="text" placeholder="Name" />
          <input
            class="form-control my-2"
            type="text"
            placeholder="Phone"
            maxlength="10"
          />
          <input
            class="form-control"
            type="text"
            placeholder="Subject"
            maxlength="150"
          />
          <textarea
            class="form-control my-2"
            rows="4"
            placeholder="Message"
            maxlength="700"
          ></textarea>
          <div class="d-grid gap-2 col-6 mx-auto mb-3">
            <button class="btn btn-primary" type="button">Send</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
};
</script>

<style>
</style>