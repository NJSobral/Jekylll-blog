import { createApp } from "vue";
import Navbar from "./navbar.vue";
import store from "../store/index.js"


const app = createApp(Navbar);
app.use(store)
app.mount("#navbar");