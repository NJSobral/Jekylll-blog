import { createApp } from "vue";
import Shop from "./shop.vue";
import store from "../store/index.js"


const app = createApp(Shop);
app.use(store)
app.mount("#shop");