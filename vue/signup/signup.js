import { createApp } from "vue";
import Signup from "./signup.vue";
import store from "../store/index.js"


const app = createApp(Signup);
app.use(store)
app.mount("#signup");