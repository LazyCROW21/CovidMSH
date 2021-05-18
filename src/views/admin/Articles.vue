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
          New Article
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
        New Article
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
              <th>#</th>
              <th>title</th>
              <th>date</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="article in articles" :key="article.id">
              <td>{{ article.id }}</td>
              <td>{{ article.title }}</td>
              <td>{{ article.date }}</td>
              <td>
                <div class="btn-group" role="group" aria-label="action btns">
                  <button type="button" class="btn btn-primary me-2">
                    <i class="fas fa-eye"></i>
                  </button>
                  <button type="button" class="btn btn-danger ms-2">
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
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          id: 1,
          title: "Masdasdurphy",
          date: "12 Jul, 2021",
          body: "User Asdasdadasda asd a",
        },
        {
          id: 2,
          title: "Muasdarphy",
          date: "12 Jul, 2021",
          body: "Ussdas  qw asf af er",
        },
        {
          id: 3,
          title: "Muasdsdarphy",
          date: "12 Jul, 2021",
          body: "Use asf qw a vgwr",
        },
      ],
    };
  },
};
</script>

<style>
</style>