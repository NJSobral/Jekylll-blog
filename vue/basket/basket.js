import { createApp } from "vue";
import Basket from "./basket.vue";
import store from "../store/index.js"
import vuetify from "../plugins/vuetify.js"


const app = createApp(Basket);
app.use(store)
app.use(vuetify)
app.mount("#basket");