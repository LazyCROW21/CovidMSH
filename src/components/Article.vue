<template>
  <div class="accordion-item">
    <h2 class="accordion-header" :id="'info-title-' + article._id">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="'#info-collapse-' + article._id"
        aria-expanded="false"
        :aria-controls="'info-collapse-' + article._id"
      >
        {{ this.formatDate(article.createdAt) }} | {{ article.title }}
      </button>
    </h2>
    <div
      :id="'info-collapse-' + article._id"
      class="accordion-collapse collapse"
      :aria-labelledby="'info-title-' + article._id"
    >
      <div class="accordion-body">{{ article.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  props: {
    article: Object,
  },
  methods: {
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
};
</script>

<style>
</style>