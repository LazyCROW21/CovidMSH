<template>
  <h2 class="m-3">Information</h2>
  <p class="ms-3">All the important information will be shared here, please check this page regularly.</p>
  <hr />
  <div class="p-3">
    <div class="accordion" id="infoAccordPanel">
      <Article
        v-for="article in articles"
        :key="article._id"
        :article="article"
      />
    </div>
  </div>
</template>

<script>
import Article from "@/components/Article.vue";
import APIService from "../APIService";

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
  async created() {
    var resp = await APIService.getArticles();
    this.articles = resp;
  },
};
</script>

<style>
</style>