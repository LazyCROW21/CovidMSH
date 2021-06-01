<template>
  <div class="container mt-3">
    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <button
          class="nav-link active"
          id="nav-new-article-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-new-article"
          type="button"
          role="tab"
          aria-controls="nav-new-article"
          aria-selected="true"
        >
          Add Article
        </button>
        <button
          class="nav-link"
          id="nav-current-article-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-current-article"
          type="button"
          role="tab"
          aria-controls="nav-current-article"
          aria-selected="false"
        >
          Current Articles
        </button>
      </div>
    </nav>
    <div class="tab-content p-2" id="nav-tabContent">
      <div
        class="tab-pane fade show active"
        id="nav-new-article"
        role="tabpanel"
        aria-labelledby="nav-new-article-tab"
      >
        <div class="">
          <form class="border rounded p-1" @submit="addArticleSubmit">
            <div class="form-floating mb-3">
              <input
                v-model="addArticle.title"
                type="text"
                class="form-control"
                id="newarticletitle"
                placeholder="Title"
              />
              <label for="newarticletitle">Title</label>
            </div>
            <div class="form-floating">
              <textarea
                v-model="addArticle.body"
                style="height: 160px"
                class="form-control"
                placeholder="Type the article here.."
                id="newarticletext"
              ></textarea>
              <label for="newarticletext">Details</label>
            </div>
            <button class="btn btn-primary my-3">Submit</button>
          </form>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="nav-current-article"
        role="tabpanel"
        aria-labelledby="nav-current-article-tab"
      >
        <table class="table table-hover table-striped table-bordered">
          <thead class="table-dark">
            <tr>
              <th class="text-center">#</th>
              <th>title</th>
              <th>date</th>
              <th class="text-center">action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(article, index) in articles" :key="article.id">
              <td class="text-center">{{ index + 1 }}</td>
              <td>{{ article.title }}</td>
              <td>{{ this.formatDate(article.createdAt) }}</td>
              <td class="text-center">
                <div class="btn-group" role="group" aria-label="action btns">
                  <button
                    type="button"
                    @click="viewArticle(article)"
                    class="btn btn-primary me-2"
                  >
                    <i class="fas fa-eye"></i>
                  </button>
                  <button
                    type="button"
                    @click="delArticle(article)"
                    class="btn btn-danger ms-2"
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
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="articleModal"
    tabindex="-1"
    aria-labelledby="articleModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg modal-fullscreen-md-down"
    >
      <div class="modal-content">
        <div class="modal-header">
          <input class="form-control modal-title" type="text" v-model="ArticleModalTitle" id="articleModalLabel">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <span class="bg-primary text-white p-1 rounded">Date: {{ this.ArticleModalDate }}</span>
          <hr />
          <textarea v-model="ArticleModalBody" rows="6" class="form-control"></textarea>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            @click="editArticle()"
            class="btn btn-primary"
          >
            Save
          </button>
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
      addArticle: {
        title: "",
        body: "",
      },
      ArticleModalTitle: "",
      ArticleModalBody: "",
      ArticleModalDate: "",
      articles: [],
    };
  },
  methods: {
    async addArticleSubmit(e) {
      e.preventDefault();
      var data = {
        title: this.addArticle.title,
        body: this.addArticle.body
      };
      var resp = await APIService.addArticle(data);
      alert("Article Added!");
      this.addArticle.title = "";
      this.addArticle.body = "";
      data._id = resp.insertID;
      this.articles = [...this.articles, data]
      console.log(data);
    },
    async editArticle() {
      var data = {
        title: this.ArticleModalTitle,
        body: this.ArticleModalBody
      };
      var resp = await APIService.editArticle(this.ArticleModalId, data);
      alert("Article Updated!");
      this.articles = this.articles.map((ele) => {
        if(ele._id == this.ArticleModalId) {
          ele.title = this.ArticleModalTitle;
          ele.body = this.ArticleModalBody;
          return ele;
        } else {
          return ele;
        }
      })
    },
    async delArticle(article) {
      if (!confirm("Are you sure you want to delete this article!")) {
        return null;
      }
      try {
        var resp = await APIService.deleteArticle(article._id);
        alert("Article deleted!");
        this.articles.filter((a) => a._id !== article._id);
      } catch (err) {
        console.error(err);
        console.error(err.message);
      }
    },
    viewArticle(article) {
      var articleModal = new bootstrap.Modal(
        document.getElementById("articleModal"),
        {}
      );
      this.ArticleModalId = article._id;
      this.ArticleModalTitle = article.title;
      this.ArticleModalBody = article.body;
      this.ArticleModalDate = this.formatDate(article.createdAt);
      articleModal.show();
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
      var resp = await APIService.getArticles();
      this.articles = resp;
      console.log(resp);
    } catch (err) {
      console.error(err);
      console.error(err.message);
    }
  },
};
</script>

<style>
</style>