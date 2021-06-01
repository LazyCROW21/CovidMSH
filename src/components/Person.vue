<template>
  <div class="position-relative">
    <span v-if="delbtn" class="close" @click="removeP(person.id)">&times;</span>
    <div class="row border-top">
      <div class="col-5">
        <strong>Name</strong>
      </div>
      <div class="col-7 field">
        {{ person.name }}
      </div>

      <div class="col-5">
        <strong>Age</strong>
      </div>
      <div class="col-7 field">
        {{ person.age }}
      </div>

      <div class="col-5">
        <strong>Vaccinated</strong>
      </div>
      <div class="col-7 field">
        {{ person.vaccinated }}
      </div>

      <div class="col-5">
        <strong>Condition</strong>
      </div>
      <div class="col-7 field">
        {{ person.condition }}
      </div>

      <div class="col-5">
        <strong>Hospitalisation</strong>
      </div>
      <div class="col-7 field">
        {{ person.hospitalisation }}
      </div>

      <div class="col-5">
        <strong>Requirement</strong>
      </div>
      <div class="col-7 field">
        {{ person.requirement }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Person",
  props: {
    delbtn: Boolean,
    person: Object,
  },
  methods: {
    removeP(id) {
      this.$emit("removerPerson", id);
    },
  },
};
</script>

<style scoped>
.field::before {
  content: ": ";
}
.close {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 24px;
  background: white;
  color: black;
  padding-left: 8px;
  padding-right: 8px;
  cursor: pointer;
}
</style>