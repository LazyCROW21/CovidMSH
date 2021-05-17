<template>
  <SideNav v-if="admin" />
  <NavBar v-else />
  <router-view />
</template>

<script>
import NavBar from "./components/NavBar";
import SideNav from "./components/SideNav";

export default {
  components: { NavBar, SideNav },
  data() {
    return {
      admin: false,
    };
  },
  methods: {
    checkRoute() {
      console.log(this.$router.currentRoute._rawValue);
      let path = this.$router.currentRoute._rawValue.fullPath;
      console.log(path);
      if (path) {
        if (path.includes("/admin")) {
          this.admin = true;
        }
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
