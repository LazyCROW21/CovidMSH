<template>
  <div class="container mt-4">
    <form @submit="submitReq" class="p-3 border rounded leftright">
      <div class="mb-4">
        <label class="form-label" for="reqName">Requester's name</label>
        <input
          type="text"
          v-model="reqName"
          id="reqName"
          class="form-control"
        />
      </div>

      <div class="mb-4">
        <label class="form-label" for="formReqPhone">Phone (Required)</label>
        <input
          max="9999999999"
          type="number"
          v-model="reqPhone"
          id="formReqPhone"
          class="form-control"
        />
      </div>

      <div class="mb-4">
        <label class="form-label" for="formReqEmail">Email (Optional)</label>
        <input
          type="email"
          v-model="reqEmail"
          id="formReqEmail"
          class="form-control"
        />
      </div>

      <div class="mb-4">
        <label class="form-label" for="formReqPINCODE"
          >Pincode (Required)</label
        >
        <input
          type="number"
          maxlength="6"
          v-model="reqPINCODE"
          id="formReqPINCODE"
          class="form-control"
        />
      </div>

      <div class="mb-4">
        <label class="form-label" for="formAddr">Address (Required)</label>
        <textarea
          v-model="reqAddress"
          class="form-control"
          id="formAddr"
          rows="4"
        ></textarea>
      </div>

      <div class="mb-4">
        <label class="form-label" for="formAI"
          >Additional information (Optional)</label
        >
        <textarea
          v-model="reqAdditionalInfo"
          class="form-control"
          id="formAI"
          rows="4"
        ></textarea>
      </div>

      <div class="mx-1 mb-4 row rounded bg-info text-white bg-gradient">
        <h3>Add needy people with their requirements</h3>
        <div class="col-9 my-2">
          <input
            v-model="addperson.name"
            class="form-control form-control-sm"
            type="text"
            placeholder="Name of person"
          />
        </div>
        <div class="col-3 ps-0 my-2">
          <input
            v-model="addperson.age"
            class="form-control form-control-sm"
            type="number"
            placeholder="Age"
          />
        </div>

        <div class="col-12 my-2">
          <div class="form-check">
            <input
              class="form-check-input"
              v-model="addperson.vaccinated"
              type="checkbox"
            />
            <label class="form-check-label" for=""> Vaccinated </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              v-model="addperson.hospitalisation"
              type="checkbox"
            />
            <label class="form-check-label" for="">
              Need Hospitalisation
            </label>
          </div>
        </div>

        <div class="col-12 my-2">
          <div class="form-check">
            <input
              class="form-check-input"
              v-model="addperson.condition"
              type="radio"
              value="positive"
              name="covidPos"
            />
            <label class="form-check-label" for="">Positive</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              v-model="addperson.condition"
              value="symptoms"
              name="covidPos"
            />
            <label class="form-check-label" for="">Symptoms</label>
          </div>
          <input
            class="form-control form-control-sm my-2"
            type="text"
            v-model="addperson.requirement"
            name=""
            placeholder="requirements"
          />
        </div>
        <div class="col-12 pb-3">
          <button
            type="button"
            class="btn btn-primary btn-sm float-end"
            @click="addPerson"
          >
            Add
          </button>
        </div>
        <div class="my-2">
          <Person
            @removerPerson="removePerson"
            v-for="person in people"
            :key="person.id"
            :person="person"
          />
        </div>
      </div>

      <!-- Submit button -->
      <button type="submit" class="btn btn-primary btn-block mb-4">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import Person from "@/components/Person.vue";

export default {
  name: "Home",
  components: { Person },
  methods: {
    addPerson() {
      this.personCnt += 1;
      this.addperson.id = this.personCnt;
      this.people = [...this.people, this.addperson];
      this.addperson = {
        id: 0,
        name: "",
        age: null,
        vaccinated: true,
        condition: "",
        hospitalisation: true,
        requirement: "",
      };
    },
    removePerson(id) {
      if (confirm("Are you sure you want to remove this person?")) {
        this.people = this.people.filter((person) => {
          person.id !== id;
        });
      }
    },
    submitReq(e) {
      e.preventDefault();
      var data = {
        requesterName: this.reqName,
        requesterPhone: this.reqPhone,
        requesterEmail: this.reqEmail,
        requesterPINCODE: this.reqPINCODE,
        requesterAddress: this.reqAddress,
        requesterAdditionalInfo: this.reqAdditionalInfo,
        personCount: this.personCnt,
        people: this.people,
      };
      console.log(JSON.stringify(data));
    },
  },
  data() {
    return {
      reqName: "",
      reqPhone: null,
      reqEmail: "",
      reqPINCODE: null,
      reqAddress: "",
      reqAdditionalInfo: "",
      personCnt: null,
      addperson: {
        id: 0,
        name: "",
        age: null,
        vaccinated: true,
        condition: "",
        hospitalisation: true,
        requirement: "",
      },
      people: [],
    };
  },
  created() {
    this.people = [
      // {
      //   id: 1,
      //   name: "Hardik Rajeshkumar Kardam",
      //   age: 20,
      //   vaccinated: true,
      //   condition: 'Negative',
      //   hospitalisation: true,
      //   requirement: "Oxygen",
      // },
    ];
  },
};
</script>


<style scoped>
.leftright {
  max-width: 560px;
  margin: auto;
}
</style>
