<template>
  <div class="bg-dark text-light p-2" id="topbar">
    <h2 class="m-0" v-if="login">
      <i class="fas fa-bars p-1" :id="'togglebtn'" @click="SideNavOpen"></i>
      <span class="ms-3">Admin Panel</span>
    </h2>
  </div>
  <div :id="'sidenav'" class="p-2 bg-light shadow" :class="sideBar">
    <h2 class="m-0">
      <i class="fas fa-bars p-1" :id="'togglebtnnav'" @click="SideNavClose"></i>
      <span class="ms-3">Admin Panel</span>
    </h2>
    <hr />
    <ul class="navbar-nav" @click="SideNavClose">
      <li class="nav-item py-1 px-2 rounded">
        <router-link to="/admin" class="nav-link">Dashboard</router-link>
      </li>
      <li class="nav-item py-1 px-2 rounded">
        <router-link to="/admin/requests" class="nav-link">Request</router-link>
      </li>
      <li class="nav-item py-1 px-2 rounded">
        <router-link to="/admin/articles" class="nav-link"
          >Articles</router-link
        >
      </li>
      <li class="nav-item py-1 px-2 rounded">
        <router-link to="/admin/messages" class="nav-link"
          >Messages</router-link
        >
      </li>
      <hr />
      <li class="nav-item py-1 px-2 rounded">
        <button @click="logOut" class="nav-link btn">Log out</button>
      </li>
    </ul>
  </div>
</template>

<script>
import APIService from "../APIService";

export default {
  name: "SideNav",
  data() {
    return {
      login: false,
      sideBar: "hidenav",
    };
  },
  methods: {
    SideNavOpen() {
      this.sideBar = "shownav";
    },
    SideNavClose() {
      this.sideBar = "hidenav";
    },
    async logOut() {
      try {
        var resp = await APIService.logout();
        var result = resp.data;
        if (result.logout == "success") {
          console.log("Logged Out!");
          this.$router.push({ name: "Admin Login" });
        }
      } catch (e) {
        console.error(e);
      }
    },
  },
  async created() {
    if (this.$route.name != "Admin Login") {
      try {
        var resp = await APIService.checkLogin();
        if (resp.status == "loggedin") {
          this.login = true;
        }
      } catch (e) {
        console.error(e);
        this.login = false;
      }
    }
  },
};
</script>

<style scoped>
#topbar {
  box-sizing: border-box;
}
#sidenav {
  position: fixed;
  top: 0;
  left: -280px;
  width: 280px;
  height: 100vh;
}
.hidenav {
  left: -280px !important;
  transition: 250ms ease-out;
}
.shownav {
  left: 0px !important;
  transition: 250ms ease-out;
}
.nav-item:hover {
  background: #0d6efd;
  color: white;
}
.nav-item:hover .nav-link {
  color: white;
}
.nav-item:active {
  background: #0d6efd;
  color: white;
}
.nav-item:active .nav-link {
  color: white;
}

#togglebtn:hover {
  cursor: pointer;
  background: #444;
}
#togglebtnnav:hover {
  cursor: pointer;
  background: #999;
}
</style>