<template>
  <h2 class="m-3">Information</h2>
  <hr />
  <div class="p-3">
    <div class="accordion" id="infoAccordPanel">
      <Article
        v-for="article in articles"
        :key="article.id"
        :article="article"
      />
    </div>
  </div>
</template>

<script>
import Article from "@/components/Article.vue";

export default {
  name: "Information",
  components: {
    Article,
  },
  data() {
    return {
      articles: [],
    };
  },
  created() {
    this.articles = [
      {
        id: 1,
        date: "10 Mar, 2021",
        title: "Article 1001",
        body:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae dolorum praesentium quam voluptatem, ab omnis, dolorem, perspiciatis amet dolores error assumenda cumque perferendis cupiditate nulla tempore esse sequi quaerat. Maiores.",
      },
    ];
  },
};
</script>

<style>
</style>