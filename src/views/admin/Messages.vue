<template>
  <div class="container mt-3">
    <table class="table table-hover table-striped table-bordered">
      <thead class="table-dark">
        <tr>
          <th>#</th>
          <th>subject</th>
          <th>date</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="msg in msgs" :key="msg.id">
          <td>{{ msg.id }}</td>
          <td>{{ msg.subject }}</td>
          <td>{{ msg.date }}</td>
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
</template>

<script>
export default {
  data() {
    return {
      msgs: [
        {
          id: 1,
          subject: "Masdasdurphy",
          date: "12 Jul, 2021",
          body: "User Asdasdadasda asd a",
        },
        {
          id: 2,
          subject: "Muasdarphy",
          date: "12 Jul, 2021",
          body: "Ussdas  qw asf af er",
        },
        {
          id: 3,
          subject: "Muasdsdarphy",
          date: "12 Jul, 2021",
          body: "Use asf qw a vgwr",
        }
      ],
    };
  },
};
</script>

<style>
</style>