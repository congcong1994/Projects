import Vue from "vue";
import App from "./App";
import router from "./router";
import ElementUI from "element-ui";
import store from "./store/store";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/css/style.css";
import "./assets/css/element.css";

Vue.use(ElementUI);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
