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
        New req
      </div>
      <div
        class="tab-pane fade"
        id="nav-completed-req"
        role="tabpanel"
        aria-labelledby="nav-completed-req-tab"
      >
        Done req
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>