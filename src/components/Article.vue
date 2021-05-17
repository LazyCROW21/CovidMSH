<template>
  <div class="accordion-item">
    <h2 class="accordion-header" :id="'info-title-'+article.id">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="'#info-collapse-'+article.id"
        aria-expanded="false"
        :aria-controls="'info-collapse-'+article.id"
      >
        {{ article.date }} | {{ article.title }}
      </button>
    </h2>
    <div
      :id="'info-collapse-'+article.id"
      class="accordion-collapse collapse"
      :aria-labelledby="'info-title-'+article.id"
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
};
</script>

<style>
</style>