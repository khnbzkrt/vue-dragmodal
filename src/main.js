import { createApp } from "vue";
import App from "./App.vue";
import DragModal from "./index.js";
import "./assets/styles.css";

const app = createApp(App);
app.use(DragModal);
app.mount("#app");
