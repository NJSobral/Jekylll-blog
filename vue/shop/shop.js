import { createApp } from "vue";
import Shop from "./shop.vue";
import store from "../store/index.js"
import router from "./router/index.js"


const app = createApp(Shop);
app.use(store)
app.use(router)
app.mount("#shop");