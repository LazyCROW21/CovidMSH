<template>
  <div :id="'sidenav'" class="p-2 bg-light">
    <h2>Admin Panel</h2>
    <hr />
    <ul class="navbar-nav">
      <li class="nav-item py-1 px-2 rounded">
        <router-link to="/" class="nav-link">Dashboard</router-link>
      </li>
      <li class="nav-item py-1 px-2 rounded">
        <router-link to="/" class="nav-link">Request</router-link>
      </li>
      <li class="nav-item py-1 px-2 rounded">
        <router-link to="/" class="nav-link">Articles</router-link>
      </li>
      <li class="nav-item py-1 px-2 rounded">
        <router-link to="/" class="nav-link">Messages</router-link>
      </li>
      <hr />
      <li class="nav-item py-1 px-2 rounded">
        <router-link to="/" class="nav-link">Log out</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideNav",
};
</script>

<style scoped>
#sidenav {
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100vh;
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
</style>