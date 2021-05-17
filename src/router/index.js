import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Information from "../views/Information.vue";
import About from "../views/About.vue";
import ContactUs from "../views/ContactUs.vue";
import NotFound from "../views/NotFound.vue";

// Admin Routes
import Dashboard from "../views/admin/Dashboard";
import Requests from "../views/admin/Requests";
import Articles from "../views/admin/Articles";
import Messages from "../views/admin/Messages";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/information",
    name: "information",
    component: Information,
  },
  {
    path: "/contactus",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/admin",
    name: "Admin Dashboard",
    component: Dashboard,
  },
  {
    path: "/admin/requests",
    name: "Admin Requests",
    component: Requests,
  },
  {
    path: "/admin/articles",
    name: "Admin Articles",
    component: Articles,
  },
  {
    path: "/admin/messages",
    name: "Admin Messages",
    component: Messages,
  },
  {
    // path: "*",
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
